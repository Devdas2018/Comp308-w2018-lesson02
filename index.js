let express=require('express');
let app=express();
// routing section
app.get('/',(req,res)=>res.send('Hello nodejs'));
app.get('/home',(req,res)=>res.send('welcome back'));
let server=app.listen(3000,()=>console.log('Example app listening on port 3000'));