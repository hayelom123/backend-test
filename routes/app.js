const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const blogs=[
        {name:'hayelom',age:24,desc:"The most famous man and contribute alot of thing to this world.and also first leading in economy of the world"},
        {name:'hayelom kiros',age:24,desc:"The most famous man and contribute alot of thing to this world.and also first leading in economy of the world"},
        {name:'hayelom kiros hadish',age:24,desc:"The most famous man and contribute alot of thing to this world.and also first leading in economy of the world"},

    ]
    res.render('index',{title:'testing EJS',blogs});
})
router.get('/about',(req,res)=>{
    res.render('about');
})
router.use((req,res)=>{
    res.render('404')
})
module.exports=router;