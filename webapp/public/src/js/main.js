'use-strict';

var dwarvish = require('../../../app/dlp/dwarvish.js');

(async () => {
    try {
        document.getElementById('input').addEventListener('input', async () => {
            await translate();
        });
        document.getElementById('input').value = "something dwarvish";
        await translate();

    }catch(error){
        console.log(error);
    }
})();

async function translate() {
    try {
        var text = document.getElementById('input').value;
        var encoded = await dwarvish.encode(text);
        document.getElementById('encoded').innerHTML = encoded;
    }catch(error){
        console.log(error);
    }
}

