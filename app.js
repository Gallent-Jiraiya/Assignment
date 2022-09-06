const exp = require('constants');
const express = require('express');  
const mongoose = require('mongoose');
const app =express();
const uri="mongodb+srv://tharindurcg:<PASSWORD>@clusterdemo.ead8m3d.mongodb.net/?retryWrites=true&w=majority";
async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("Connected to MongoDB established");
  }
  catch(error){
    console.log(error);
  }
}

//connect();

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/xml', express.static(__dirname + 'public/xml'))

//set views
app.set('views','./views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index')
})











app.listen(8000,() =>{
  console.log("Server started on port 8000")
});