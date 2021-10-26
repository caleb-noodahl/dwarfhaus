'use-strict';
const mappings = require('./mappings'); 

module.exports.encode = async (input) => {
    return new Promise((resolve, reject) => {
        try {
            var output = []; 
            input = input.toLowerCase(); 
            
            var skipTo = 0;
            for(var i = 0; i <= input.length -1; i++) {
                if(skipTo > 0){
                    skipTo--;
                    continue;
                }

                for(var r = 3; r > 0; r--){
                    const next = input.substring(i, i + r);
                    const runeDec = mappings.english[next];
                    if(runeDec != undefined){
                        skipTo = r - 1; 
                        output.push(runeDec);
                        break;
                    }
                }
            }
            var response = String.fromCharCode(...output);
            resolve(response); 
        }catch(error) {
            console.log(`dwarvish | encode | error | ${error}`);
            reject(error); 
        }
    });
}

module.exports.decode = async(input) => {
    return new Promise((resolve, reject) => {
        try {

        }catch(error){
            console.log(`dwarvish | encode | error | ${error}`);
            reject(error); 
        }
    });
}