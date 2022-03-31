const express  =require('express')
const app = express()
const port = process.env.PORT||81;
const cors = require("cors");
const fs = require('fs')
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());
app.get('/',(req,res)=>{
    res.send('hii')
})
app.get('/simpleData',(req,res)=>{
    let s=fs.readFileSync('./smalldata.json','utf-8')
    s = JSON.parse(s)
    res.send(s)
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});