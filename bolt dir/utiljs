const express = require('express');
const app = express();


module.exports = class endPoints{
  
static async tryIt(name){
  
  try{
    const response = await fetch('futuramaapi.herokuapp.com/api/quotes');
    console.log(response.body);
  // .then(response => response.json())
  // .then(data => console.log(data));
    // app.get('/futuramaapi.herokuapp.com/api/quotes', (req,res,next) =>{
    //   console.log(req);
    //   // console.log(name);
    // });
   
    
    
    // console.log(name, ' this is returned')
  
  }catch(error){
    console.log(error);
  }
    }

}
