// Iteration 1

function caesarCipher(message){
	return message.split('').map(function(char){
		var newMessage = char.charCodeAt(0)-3;
		return String.fromCharCode(newMessage);
	})
}
var encrypted = caesarCipher("brutus").join('');
console.log(encrypted);

// Iteration 2- Don't shift special characters

function caesarCipher(message){
	return message.split('').map(function(char){
		if (char.toLowerCase() >= "a" && char.toLowerCase()<="z"){
			var newMessage = char.charCodeAt(0)-3;
			return String.fromCharCode(newMessage);
		}else{return char}	
	})
}
var encrypted = caesarCipher("Et tu, brute?").join('');
console.log(encrypted);

// Iteration 3-Customizable Shifting

function caesarCipher(message,shift){
	return message.split('').map(function(char){
		if (char.toLowerCase() >= "a" && char.toLowerCase()<="z"){
			var newMessage = char.charCodeAt(0)+shift;
			return String.fromCharCode(newMessage);
		}else{return char}	
	})
}
var encrypted = caesarCipher("Et tu, brute?",-4).join('');
console.log(encrypted);

// Iteration 3- Customizable Shifting without shift passed

function caesarCipher(message,shift){
	if(shift === undefined){shift = -3;}
	return message.split('').map(function(char){
		if (char.toLowerCase() >= "a" && char.toLowerCase()<="z"){
			var newMessage = char.charCodeAt(0)+shift;
			return String.fromCharCode(newMessage);
		}else {return char};	
	}).join('');	
}
var encrypted = caesarCipher("Et tu, brute?");
console.log(encrypted);

// Iteration 3-Opción 2
function caesarCipher(message,shift){
	if(shift === undefined){shift = -3;}
	var chars = message.split('');
	var charResult = chars.map(function(char){
		if (char.toLowerCase() >= "a" && char.toLowerCase()<="z"){
			var newMessage = char.charCodeAt(0)+shift;
			return String.fromCharCode(newMessage);
		}else {return char};	
	})
	return charResult.join('');	
}
var encrypted = caesarCipher("Et tu, brute?",-4);
console.log(encrypted);

// Iteration 4- Wrap up when shifting out of the alphabet






