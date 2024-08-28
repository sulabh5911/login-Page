const express=require('express');
const app=express();

app.set("view engine",ejs);
app.use(express.json());


app.get('/',function(req,res){
    res.send("hello world");
})

app.listen(3000);