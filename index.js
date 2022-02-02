const express = require("express");
const indexrouter=require('./routes/app');

const app =express();
app.set('views','views');//setting engine to views and the folder is views
app.set('view engine','ejs');
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
})
app.use('/',indexrouter);
app.get("/add-user",(req,res)=>{
    res.send("pease add user")
})
app.listen(9000,()=>{
    console.log("app is listening on port 9000");
});