const fs = require("fs")
console.log( " read start")
fs.readFile('hello.txt', function( error , data){
    if(error){
         return error
        console.log(" you can not read this file . in this file error  ")
    } else{
        
        console.log( " you  can  raed this file ")
        console.log(data.toString())
        return data
    }
    
})