(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./mappings":2}],2:[function(require,module,exports){
'use-strict';

//these mappings are explicit to assets\cirth_erebor\Erebor.ttf
//font found @ https://www.dafont.com/cirth-erebor.font
//.tff file ref : "DAN SMITH 1998 VER:1.1 FREEWARE"
//thanks to Daniel Steven Smith

//https://en.wikipedia.org/wiki/Cirth
//see Angerthas Erebor section

/*Angerthas Erebor also features combining diacritics:
    a circumflex Certh Circumflex.png used to denote long consonants;
    a macron below Certh Macron below.png to indicate a long vowel sound;
*/
module.exports.mapping = {
    33: ['dh'],
    34: ['the'],
    35: ['ch'],
    36: ['j'],
    37: ['sh'],
    38: ['au', 'ay'],
    39: [' '],
    40: ['ea'],
    41: ['oa'],
    42: ['au', 'aw'],
    43: ['4'],
    44: ['n'],
    46: ['s'],
    47: ['??'],
    48: ['th'],
    49: ['p'],
    50: ['b'],
    51: ['f'],
    52: ['v'],
    53: ['hw'],
    54: ['m'],
    55: ['mb'],
    56: ['t'],
    57: ['d'],
    58: ['ll'],
    59: ['y'],
    60: ['??'],
    61: ['='],
    62: ['??'],
    63: ['??'],
    64: ['r'],
    65: ['hy'],
    66: ['&'],
    67: ['ts'],
    68: ['??'],
    69: ['nw'],
    70: ['w'],
    71: ['??'],
    73: ['1'],
    74: [], //hobbit 'm' | ignored
    75: ['eu', 'ew'],
    76: ['??'],
    77: ['??'],
    79: ['2'],
    80: ['3'],
    81: ['ghw'],
    82: ['g'],
    83: ['u'],
    84: ['gh'],
    85: ['*'],
    86: ['+h'],
    87: ['ngw'],
    88: ['ps'],
    89: [' '],
    90: ['??'],
    91: [],
    92: ['.'],
    93: ['ss'],
    95: [], //???????
    97: ['l'],
    98: ['o', '1'],
    99: ['a'],
    100: ['nd'],
    101: ['k'],
    102: ['h'],
    //103: ['s'],
    104: ['??'],
    105: ['kw'],
    106: ['ng'],
    107: ['nj'],
    108: ['i'],
    109: ['??'],
    110: ['oo'],
    111: ['gw'],
    112: ['khw'],
    113: ['zh'],
    114: ['g'],
    115: ['lh'],
    116: ['kh'],
    117: ['n'],
    118: ['??'],
    119: ['ks'],
    120: ['??'],
    121: ['gh'],
    122: ['e'],
    123: ['3'],
    124: ['|'], //noidea
    125: ['4'],
    126: ['??']
};

//rough substitution cyhper
//we'll take our mappings from above and make a dict collection
//that is easy to work with
module.exports.english = {
    ' ' :39,
    'a': 99,
    '??' : 118,
    'au': 38,
    'ay': 38,
    'b': 50,
    'c': 101, //substitue 'k' symbol
    'ch': 35,
    'd': 57,
    'dh': 33,
    'e': 122,
    'ea' : 40,
    'eu' : 75,
    'ew' : 75,
    'f': 51,
    'g': 82,
    'h': 102,
    'hw' : 53,
    'hy' : 65,
    'i': 108,
    '??' : 34,
    'j': 36,
    'k': 101,
    'kh' : 116,
    'khw': 112,
    'kw' : 105,
    'ks' : 119,
    'l': 97,
    'll' : 58,
    'm': 54,
    'mb' :55,
    'n': 44,
    'nd' : 100,
    'ng' : 106,
    'ngw': 87,
    'nw' : 69,
    'o': 98,
    'oa' : 41,
    'oo' : 110,
    'p': 49,
    'ps' : 88,
    'q': 105, //no q literal. translate via 'kw' sound
    'r': 64,
    's': 46,
    'sh': 37,
    'ss' : 93,
    't': 56,
    'th': 48,
    'the' : 34,
    'ts' : 67,
    'u': 83,
    '??' : 68,
    'v': 52,
    'w': 70,
    'x': 116,  //no x literal. translate via 'kh' sound
    'y': 59,
    'z': 119
};

},{}],3:[function(require,module,exports){
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


},{"../../../app/dlp/dwarvish.js":1}]},{},[3]);
