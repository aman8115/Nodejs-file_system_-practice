//  file system in node js

const fs = require("fs")
/*
fs.writeFile("hello.txt" ," I am currntly working on node js file system module", function( error){
    if(error){
        console.log( " you can not write  somthing in this file because you file path is worng ")
    } else{
        console.log(" writing successful")
    }
}) */
// write a file using synchronous methode
const synway = fs.writeFileSync("hello.txt"," Node js is run time enviroment of javascript ")
console.log( " using synchronous way ",synway)