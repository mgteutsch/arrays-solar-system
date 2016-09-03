var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

console.log("Original planets Array:", planets);
document.getElementById("originalarray").innerHTML = planets;
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");


// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanets = planets.map(function(word) {
		return " " + word[0].toUpperCase() + word.slice(1);
});

console.log("1. Capitalize 1st Letter:");
console.log("word[0].toUpperCase() + word.slice(1)", capitalizedPlanets);
document.getElementById("capitalizeplanet").innerHTML = capitalizedPlanets;


//Use the filter method to create a new array that contains planets with the letter 'e'

var letter_E_Planets = planets.filter(function(word) {
	return word.indexOf('e') !== -1;
	} 
);

console.log("2. Return Planets with the Letter 'E' Only:");
console.log("indexOf('e') !== -1", letter_E_Planets);
document.getElementById("letterEplanet").innerHTML = letter_E_Planets;


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(
	function(previousWord, currentWord) {
		return previousWord + " " + currentWord;
	}
);


console.log("3. Make a sentence from this array: ", words);
console.log("words.reduce(see function) :");
console.log(sentence);
document.getElementById("sentencebuilder").innerHTML = "Original Array: " + "<br/>" + words + "<br/> <br/>" + "New Sentence: " + "<br/>" + sentence + ".";
