var quizcontainer = document.querySelector("#quiz");
var submitBtn = document.querySelector("#submit");
var resultcontainer = document.querySelector("#output");


// var readlineSync = require("readline-sync");
var score = 0;
var userName = prompt("Enter your name");
console.log("Welcome ", userName);
console.log("fun quiz for know how much you know your friend");

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer ) {
        console.log("Correct answer");
        score = score - 2;
    } else {
        console.log("Oops, Wrong answer");
        score = score - 1;
    }
    console.log()
}