const express = require("express");
// const indexrouter=require('./routes/app');
 require('./src/db/db');
const Users = require('./src/models/users.model');
const Tasks = require('./src/models/task.model')
const app =express();
// app.set('views','views');//setting engine to views and the folder is views
// app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log(' host: ',req.hostname);
    console.log(`path:${ req.path}`);
    // console.log('%c ${ req.method}','color:green')
    console.log(`url:${ req.url}`)
    console.log(req) 
    next()
});

// app.use('/',indexrouter); c
app.get("/add-user",(req,res)=>{
    res.send("pease add user")
});


async function test(name){
     const user = new Users({
         name:name
     });
  let stored= await user.save();
  console.log(stored)
  return stored;
}

async function createTask(owner,name,desc){
    const task = new Tasks({
     name,desc,owner
    });
    const result = await task.save();
    console.log(result)
}
async function findUserTasks(id){
    const userTasks = await Users.findById(id).populate('tasks');
    // await userTasks.populate('mytasks').execP
    console.log(userTasks);
}
// test("Hayelom")
// createTask('62010bdfe44e78aff186ebf4',"test 2","test 2 description");
// setTimeout(()=>{test("hayelom")},3000)
//  findUserTasks('62010bdfe44e78aff186ebf4');
async function findUserByNameINDB(name){
    //    const result =await Users.findByName(name);
    const result =await Users.find().byName(name);// you can't call by name directly
       console.log(result.toJSON())
}
 findUserByNameINDB("Hayelom")
app.listen(9000,()=>{ 
    console.log("app is listening on port 9000");
});