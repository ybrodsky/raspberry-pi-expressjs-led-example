var Gpio = require('onoff').Gpio;
var led = new Gpio(17, 'out');
var piblaster = require('./PiBlasterService.js');

function getStatus() {
	return led.readSync() ? true : false;
}

function switchOn(cb) {
	piblaster.release(17, function(err) {
		led.writeSync(1);
		cb(null, getStatus());
	});	
}

function switchOff() {
	led.writeSync(0);
	return getStatus();
}

function changeStatus(data, cb) {
	if(data.status) {
		switchOn(function(err, status) {
			return cb(null, status);
		});
	}else {
		return cb(null, switchOff());
	}
}

function pwmValue(value) {
	switchOff();
	piblaster.setPwm(17, value, function() {
		return true;
	});
}

module.exports = {
	getStatus: getStatus,
	switchOn: switchOn,
	switchOff: switchOff,
	changeStatus: changeStatus,
	pwmValue: pwmValue
};