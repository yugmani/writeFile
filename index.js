const fs = require("fs");

fs.writeFileSync("text.txt", process.argv[2], function(err, data){
    if (err){
        console.log(err);
    }
    else {
        console.log("success!");
    }
})

fs.readFile("text.txt", "utf-8", function(error, data){
    if (error){
        console.log(error);
    }
    else {
        console.log(data);
    }
})

fs.appendFile("text.txt", "\nI love all programming languages", function(error, data){

})