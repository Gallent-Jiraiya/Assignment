const exp = require('constants');
const express = require('express');  
const mongoose = require('mongoose');
const { networkInterfaces } = require('os');
const app =express();
const uri="mongodb+srv://tharindurcg:assasinscreed@clusterdemo.ead8m3d.mongodb.net/webAssignment";
async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("Connected to MongoDB established");
  }
  catch(error){
    console.log(error);
  }
}

connect();
//Add data to mongoose
//create data schema
/*const booksSchema ={
  title:String,
  category:String,
  year:String,
  price:Number
}
const Book= mongoose.model("Book",booksSchema);
let newBook=new Book({
  title:"A",
  category:"dpm",
  year:"2022-08-15",
  price:1000
});
try {
  newBook.save();
} catch (error) {
  console.log(error);
}*/
//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/xml', express.static(__dirname + 'public/xml'))
app.use('/js', express.static(__dirname + 'public/js'))

//set views
app.set('views','./views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index')
})











app.listen(8000,() =>{
  console.log("Server started on port 8000")
});