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
var copyWord = [...word];
var userWord;

var attempts = 5;
var wordId = 1;

var shownLetters = [false,false,false,false,false];

createDivs(word.length);

button.onclick = function(){
	userWord = input.value.toLowerCase().split("");
	if(input.value.length < 5){
		alert("ongeldig invoer");
	}
	else if (input.value == words[randomWord] || attempts == 1){
		gameOver();
	}
	else {
		checkLetters();
		createDivs(5);
		attempts --
		pText.innerHTML = "attempts left :" + attempts;
		input.value = "";
	}
}
function createDivs(qty){
	var wordDiv = document.createElement("div");
	wordDiv.id = "word_"+wordId;
	results.appendChild(wordDiv);
	for (i=0; i<qty; i++){
		var createDiv_letter = document.createElement("div");
		var node = document.creatTextNode(".");
		createDiv_letter.appendChild(node)
		createDiv_letter.id = wordId+"_letter_" +(i+1);
		wordDiv.appendChild(createDiv_letter);
		if (shownLetter[i] == true){
			document.getElementById(wordId+"_letter_"+(i+1)).innerHTML = word[i];

		}
	}
	document.getElementById(wordId+"_letter_"+1).innerHTML = word[0];
	wordId++;
}

function checkLetters(gameOverCheck){
	copyWord = [...word];
	for(i=0; i<userWord.length; i++){
		document.getElementById((wordId-1)+"_letter_"+(i+1)).innerHTML = userWord[i];
		 document.getElementById((wordId-1)+"_letter_"+(i+1)).style.backgroundColor = "red";
	
        if (copyWord[i] == userWord[i]) {
			document.getElementById((wordId-1)+"_letter_"+(i+1)).style.backgroundColor = "green";
			w=copyWord[i] = "*";
			userWord[i] = "";
		}
	}  


}