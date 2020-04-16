'use strict';

module.exports.hello = (event, context, callback) => {
	const response = {
		statusCode: 200,
		headers: {
		'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			message: 'Authenticated call!',
			input: event
		})
	};

	callback(null, response);
};

module.exports.postConfirm = (event, context, callback) => {
	console.log("POST CONFIRM CALLED>>>>>>>");
    console.log ("Authentication successful");
    console.log ("Trigger function =", event.triggerSource);
    console.log ("User pool = ", event.userPoolId);
    console.log ("App client ID = ", event.callerContext.clientId);
    console.log ("User ID = ", event.userName);

	callback(null, event);
};

module.exports.postReq = (event, context, callback) => {

	const response = {
		statusCode: 200,
		headers: {
		'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			message: 'Authenticated call!',
			input: event
		})
	};

	callback(null, response);
};
