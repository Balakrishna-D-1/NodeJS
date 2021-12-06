const fs = require('fs');

//let d = '';

/*fs.readFileSync('meow.txt',(err, data) => {
    if(err === null) {
        d = data.toString();
      console.log("Successfully fetched data");
    }else {
     console.log(err.message);
        
   }
});*/
let d = fs.readFileSync('meow.txt'); 

fs.writeFile('meow.txt',d.toString()  + " Balakrishna D ", (err) => {
    if(err === null) {
        console.log("successfully write Data!");
    }
    else {
        console.log("err.message");
    }
});