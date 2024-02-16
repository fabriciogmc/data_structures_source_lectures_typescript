import * as fs from 'fs';

let my_text:string = "This is my text to be written"

fs.writeFile("./test.txt", my_text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

// Or
fs.writeFileSync('./teste.txt', 'Hey thereee!');