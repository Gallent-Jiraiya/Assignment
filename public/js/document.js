//lOAD XML DOCUMENT
var xmlDoc;
function readXML(){
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadTable(this);
    }
};
xhttp.open("GET", "xml/new.xml", true);
xhttp.send();
}
//DISPLAY XML FILE ON TABLE
function loadTable(xml) {
  var x, i,y; 
  xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("book");
    
  for (i = 0; i < x.length; i++) { 
    y=x[i].getElementsByTagName('author');
    var z,authors="";
    for(z=0;z<y.length;z++){
      authors += y[z].childNodes[0].nodeValue +"<br>";
    }
    const row=document.createElement('tr');
    row.innerHTML="<td>"+ x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>"+ x[i].getAttribute('category')+"</td><td>"+ 
    authors +
    "</td><td>"+ x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "</td><td>"+ x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +"</td>";
    document.querySelector('tbody').appendChild(row);      
  }
}
//form controls
  const fields=document.querySelector('.fields');
  const add_Author=document.querySelector('#add_Author');
  const btn_submit=document.querySelector('#btn-submit');
  const fieldTitle=document.getElementById('title');
  const fieldCategory=document.getElementById('category');
  const fieldYear=document.getElementById('year');
  const fieldaPrice=document.getElementById('price');
  const fieldAuthor=document.getElementById('author_01');
  
  loadEventListeners();
  
  function loadEventListeners(){
  
    document.addEventListener('DOMContentLoaded',readXML);
    add_Author.addEventListener('click',addAuthorfield);
    btn_submit.addEventListener('click',validateSubmit);
  }
  
  
  
  //FORM FUNCTIONS
  //add new auhtor input fields
  
  function addAuthorfield(){
    var x=(fields.childElementCount-1).toString();
    var id="author_"+x;
    const input=document.createElement("div");
    input.className='row';
    input.innerHTML='<div class="input-field col s12">       <input id="'+id+'" type="text" class="validate" required>     <label for="'+id+'">Author</label>    </div>'
    fields.appendChild(input);
  }
  
  //add new book to the table
  function validateSubmit(e){
    var fieldelements=document.querySelectorAll('.validate');
    var errors=0;
    for(i=fieldelements.length-1;i>=0;i--){
      if(!fieldelements[i].reportValidity()){
        errors++;
      }
    }
    if(errors==0){
      submitForm();
    }
    e.preventDefault();  
  }
  
  function submitForm(){
    
  
    alert("form submited")
  }