const express= require('express');
const bodyParser=require('body-parser');
const router=require('./Routes/route');

const hostname='localhost';
const port=3000;

const app=express();

app.use(bodyParser.json())
app.use('/',router);
app.listen(port,hostname,()=>{
    console.log(`Server is running at http// ${hostname}:${port}`)
})