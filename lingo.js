var input = document.getElementById("input");
var button = document.getElementById("button");
var pText = document.getElementById("pText");
var results = document.getElementById("result");

var gameDiv = document.getElementById("gameDiv");
var gameDiv2 = document.getElementById("gameDiv2");
var h1Text = document.getElementById("h1Text");

var retry = document.getElementById("retry");

var randomWord = Math.floor(Math.random()*words.length);

var word = words[randomWord].split("");