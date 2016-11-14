var read = require('read');
var prompt = require('prompt');

var User = function(name,currentScore,currentQuestion){
	this.name 				= name;
	this.currentScore 		= currentScore;
	this.currentQuestion 	= currentQuestion;	
}

var Question = function(id,text,statement){
	this.id					= id;
	this.text 				= text;
	this.statement 			= statement;
}

var Quiz = function(questionArray,userArray){
	this.questionArray 		= questionArray;
	this.userArray			= userArray;
	this.userIndex			= 0;
	this.randomnumber 		= Math.floor(Math.random()* this.questionArray.length) + 1;
	this.index 				= 0;
	this.score 				= 0;
	this.totalScore			= function(){console.log("Your current score is: " + this.score)};
}

Quiz.prototype.start = function(){
	var options = {prompt: "Are you a New User? Yes or No"};
	read(options,this.userRegistration.bind(this));
}

Quiz.prototype.userRegistration = function(err,userAnswer){
	if(userAnswer.toLowerCase() === "yes"){
		var newUser = {prompt: "Please enter a username"};
		read(newUser,this.newUser.bind(this));
	}else{
		var existingUser = {prompt: "Please enter your username"}
		read(existingUser,this.userCheck.bind(this));
		// var userProperties = [{name:'username'},{name:'password',hidden:false}];
		// prompt.start();
		// prompt.get(userproperties,function (err, result){
		// 	console.log('Command-line input received:');
  //   		console.log('  Username: ' + result.username);
  //   		console.log('  Password: ' + result.password);
		// });
	
	}
}
Quiz.prototype.newUser = function(err,name){
	var userToPush 					= new User();
	userToPush.name 				= name;
	userToPush.currentScore 		= 0;
	userToPush.currentQuestion		= 0;
	this.userArray.push(userToPush);
	// console.log(userArray);
	console.log("Wellcome to this Quiz"+ " "+ name + " " + "Let's go!");
	this.bonusQuestion();
	this.displayQuestions();
}

Quiz.prototype.userCheck = function(err,username){
	var userData = this.userArray.find(function(person){return person.name.toLowerCase() === username.toLowerCase()});
	console.log("Wellcome back!" + userData.name + "\n" + 
	"Your last score is:" + " " + userData.currentScore + "\n" +
	"You left the Quiz on question:" + " " + userData.currentQuestion + "\n" +
	"Let's begin again!!");
	this.bonusQuestion();
	this.displayQuestions();
}

Quiz.prototype.bonusQuestion = function(){
	console.log("Pay attention. Question " + this.randomnumber + " worths double!!");
}

Quiz.prototype.displayQuestions = function(){
	var	questions = {prompt: this.questionArray[this.index].id + ". " + this.questionArray[this.index].text};
	read(questions,this.checkAnswer.bind(this));
};

Quiz.prototype.checkAnswer = function(err,answer){
	if(answer.toLowerCase() === this.questionArray[this.index].statement.toLowerCase()){
		console.log("Your answer is correct. Good job!.");
		this.index++;
		if(this.randomnumber == this.questionArray[this.index].id){this.score += 2}
			else{this.score++};
		this.totalScore();
		this.displayQuestions();
	}else{
		console.log("Your answer is not correct.");
		this.index++;
		if(this.score > 0){
			if(this.randomnumber == this.questionArray[this.index].id){this.score -= 2}
			else{this.score--};
		};
		this.totalScore();
		this.displayQuestions();
	}
}

var questionArray = [
	new Question("1","What's 1*7?","7"),
	new Question("2","Who did discover America?","Colon"),
	new Question("3","What's JS?","JavaScript"),
	new Question("4","Which year the man landed in the Moon?","1969"),
	new Question("5","Who was the first person to walk on the Moon?","Neil Armstrong"),
	new Question("6","Who painted the Sistine Chapel","Michelangelo"),
	new Question("7","Who said I think, therefore I am","Descartes"),
	new Question("8","Who sang New York,New York", "Frank Sinatra"),
	new Question("9","In which city is Hollywood?", "Los Angeles"),
	new Question("10","What's the capital of Brazil?","Brasilia")
];

var userArray = [
	new User("Belen",3,5),
	new User("Ana",2,6),
	new User("David",8,9),
	new User("Juan",5,7),
];
quiz = new Quiz(questionArray,userArray);
quiz.start();
