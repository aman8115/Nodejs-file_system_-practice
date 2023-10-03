const   fs = require("fs")
console.log( " read and close")
fs.readFile('hello.txt', function(err, data){
    if( err){
        console.log( " file could not read ")
        return err
    } else{
        console.log( " reading successful")
        console.log(data.toString())
        return data
    }
    fs.close(data, function( errr){
        if( errr){
        console.log( " file could not  close")

        }  else{
            console.log( "  file close successful")
        }
    })
})
console.log( " read and close end")