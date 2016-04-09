var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');
var sleep = require('sleep'),
  _baseTime = 128000, //micro seconds
  sleepTime = _baseTime, 
  btwCodes = _baseTime * 2,
  btwLetters = _baseTime * 4,
  btwWords = _baseTime * 8;
var piblaster = require('./PiBlasterService.js');
 
var MorseCode = {
  'a': '._',
  'b': '_...',
  'c': '_._.',
  'd': '_..',
  'e': '.',
  'f': '.._.',
  'g': '__.',
  'h': '....',
  'i': '..',
  'j': '.___',
  'k': '_._',
  'l': '._..',
  'm': '__',
  'n': '_.',
  'o': '___',
  'p': '.__.',
  'q': '__._',
  'r': '._.',
  's': '...',
  't': '_',
  'u': '.._',
  'v': '..._',
  'w': '.__',
  'x': '_.._',
  'y': '_.__',
  'z': '__..',
  '1': '.____',
  '2': '..___',
  '3': '...__',
  '4': '...._',
  '5': '.....',
  '6': '_....',
  '7': '__...',
  '8': '___..',
  '9': '____.',
  '0': '_____'
}

function emitCode(text, cb) {
  piblaster.release(17, function() {
    var _t = text.toLowerCase().split('');
    for(var i = 0; i < _t.length; i++) {
      var _l = _t[i];
     
      if(_l == ' ') { // if the char is a space 
        sleep.usleep(btwWords);
      }
      else {
        if(!MorseCode[_l]) continue;
        
        var _c = MorseCode[_l].split('');
        sleep.usleep(btwLetters);
        
        for(var j = 0; j < _c.length; j++) {
          led.writeSync(1);
          if(_c[j] == '.') {
            sleep.usleep(sleepTime);
            led.writeSync(0);
            sleep.usleep(btwCodes);
          }
          else {
            sleep.usleep(sleepTime * 3);
            led.writeSync(0);
            sleep.usleep(btwCodes);
          }
        }
       }
    };
    cb(null, true);
  });  
}

module.exports = {
  emitCode: emitCode
};

 
