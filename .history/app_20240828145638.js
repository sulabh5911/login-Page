const express=require('express');
const app=express();
const cookieParser=require('cookie-')
app.set("view engine",ejs);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(3000);