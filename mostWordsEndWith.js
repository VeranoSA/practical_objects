//Since in Javascript a string is a char array, you can access the last character by the length of the string.
//var lastChar = myString[myString.length -1]; or
//myString.charAt(myString.length-1);
function mostWordsEndWith(sentence){
  var newString = sentence.split(' ');
  const stringMap = [];
  var wordsMap = {};
  
  //find the last letter of each string and push it into stringmap
  //And checking how many times a letter apeared most
  for (var i=0; i <newString.length; i++){
    var lastLetter = newString[i];
    var str = lastLetter.charAt(lastLetter.length-1);
    stringMap.push(str);
    if (wordsMap[str] == null){
      wordsMap[str] = 1;
    } else {
    wordsMap[str] += 1;
    }
  }
  //console.log(wordsMap)
  var currentMostLetter = 0;
  var currentLetter = "";
  
  for (const mostLetter in wordsMap){
    var numWords = wordsMap[mostLetter];
    if (numWords > currentMostLetter){
      currentMostLetter = numWords;
      currentLetter = mostLetter;
    }
  }
 var wordsArray = [];
 var results = {
   letter: currentLetter,
   words: wordsArray,
 }
 //After getting the last letter which occure most now currentLetter
 //Then you can find string ending with letter that occure most
 //Then push the strings into wordsArray
    for (var i=0; i < newString.length; i++){
      if (newString[i].endsWith(currentLetter)){
        wordsArray.push(newString[i]);
      }
    }
  return results;
}

var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
console.log(mostWordsEndWith(sentence))
  
