const express=require('express');
const HTTP=require('http')
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());
const PORT =3000


app.use("/",require('./routes'))

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}!`)
})




HTTP.createServer(app);

