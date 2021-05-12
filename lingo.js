var input = document.getElementById("input");
var button = document.getElementById("button");
var text = document.getElementById("pText");
var results = document.getElementById("result");

var gameDiv = document.getElementById("gameDiv");
var gameDiv2 = document.getElementById("gameDiv2");
var text2 = document.getElementById("text2");

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
		text.innerHTML = "attempts left :" + attempts;
		input.value = "";
	}
}
function createDivs(qty){
	var wordDiv = document.createElement("div");
	wordDiv.id = "word_"+wordId;
	results.appendChild(wordDiv);
	for (i=0; i<qty; i++){
		var createDiv_letter = document.createElement("div");
		var node = document.createTextNode(".");
		createDiv_letter.appendChild(node)
		createDiv_letter.id = wordId+"_letter_" +(i+1);
		wordDiv.appendChild(createDiv_letter);
		if (shownLetters[i] == true){
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
	for (i=0; i<userWord.length; i++) {
		if (copyWord.includes(userWord[i])) {
			document.getElementById((wordId-1)+"_letter_"+(userWord.indexOf(userWord[i])+1)).style.backgroundColor = "#FFD700";
			document.getElementById((wordId-1)+"_letter_"+(userWord.indexOf(userWord[i])+1)).style.borderRadius = "50%";
			copyWord[copyWord.indexOf(userWord[i])] = "-"
			userWord[i] = "";
			console.log(copyWord)
		}

	}
	if (gameOverCheck != true) {
		for (i=0; i<userWord.length; i++) {
			if (copyWord[i] == "*") {
				shownLetters[i] = true;
			}
		}
	}	
}

function gameOver() {
	retry.style.display = "block";
	retry.onclick = function(){
		location.reload();
	}
	
	checkLetters(true);
	if (input.value == words[randomWord]) {
		gameDiv2.innerHTML = "Goed gedaan, je hebt het woord geraden!"
	}
	else if (attempts == 1) {
		gameDiv2.innerHTML = "Helaas, je hebt het woord niet geraden. <br> Het woord was: " + words[randomWord] + ".";
		gameDiv2.style.fontSize = "26px";
		gameDiv2.style.color = "red";
	}
}

