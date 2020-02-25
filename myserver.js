var express=require('express');
var app=express();
app.set('view engine','jade');
var port = process.env.PORT || 3000;

app.get('/',function(req,res)
{
    res.render('index',{title:'PhuongPT',message:'Welcome BinhDQ'})
});

app.get('/test',function(req,res)
{
    res.send('Hello test!');
});
var server=app.listen(3000,function() {});