const fs = require("fs")


// Asynchronous way to append data in file 
fs.appendFile("hello.txt", "The fs.appendFile() method is used to synchronously append the data to the file. filepath: It is a String that specifies the file pat   ", 'utf-8' , function( error){
    if(error){
        console.log(" you can not insert datra into this file ")
    } else{
        console.log( " data insrting is successful")
    }
})