const fs = require("fs");

//Läsa textfilen
//två argument, 1: namnet på filen vi ska läsa, 2: vilket format filen ska avlä


const read = fs.readFile("textfil.txt", "utf-8", (err, data) => {
if(err){
    console.error(err, "vi kunde inte läsa filen");
    return;
}
console.log("data", data);
});

//skriva till en ny fil

const write = fs.writeFile("nyfil.txt", "detta är en ny fil", (err) => {
    if(err){
        console.error(err, "vi kunde inte skriva filen");
        return;
    }
    console.log("filen har skapats och vi har skrivit till den");


});


module.exports = {
    read,
    write
}

