// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs  = require("fs");

fs.readFile("./myFile.txt", (err, data) => {
    if(err){
        console.log(err);
    }else{
        let updatedContent = data.toString().replace(/\s+/g, ' ').trim();
        fs.writeFile("./myFile.txt", updatedContent, (err) => {
            if(err){
                console.log(err)
            }else{
                console.log("File Write successful!!!");
            }
        })
    }
})




