var express = require('express');
var router = express.Router();
var LedService = require('../services/LedService.js');
var MorseCodeService = require('../services/MorseCodeService.js');

router.post('/switch', function(req, res, next) {
	var params = req.body;
	LedService.changeStatus(params, function(err, status) {
		res.send({status: status});
	});	
});

router.post('/pwm', function(req, res, next) {
	var params = req.body;
	var status = LedService.pwmValue(params.value);  
	res.send({status: status});
});

router.post('/morse', function(req, res, next) {
	var params = req.body;
	MorseCodeService.emitCode(params.text, function(err, status) {
		res.send({status: true});
	});
});

router.get('/status', function(req, res, next) {
	var status = LedService.getStatus();
	res.send({status: status});
});

module.exports = router;
