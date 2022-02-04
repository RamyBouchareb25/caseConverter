let textarea = document.querySelector("textarea");
let lowerCase = document.getElementById("lower-case");
let upperCase = document.getElementById("upper-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let properCaseString = "";
let stringToChange = "";
let stringCut = "";
let numberOfWords = 0;
let numberOfSentences = 0;
let j =0;
let k =0;
let l =0;
let sentenceCaseString = "";
let stop = false;
let stop2 = false;
const regex = /[A-Z]/g;
const regex2 = /[a-z]/g;

lowerCase.onclick = function (){
    textarea.value = textarea.value.toLowerCase();
}
upperCase.onclick = function () {
    textarea.value = textarea.value.toUpperCase();
}
properCase.onclick = function () {
    stringToChange = textarea.value.toLowerCase();
    stringToChange = stringToChange.trim();
    stringCut = stringToChange.split(" ");
    numberOfWords = stringCut.length;
    for (let l=0 ; l<numberOfWords ; l++) {
        stop2 = false;
        while (!stop && k<=stringCut[l].length) {
            if (stringCut[l][k].match(regex) === null && stringCut[l][k].match(regex2) === null){
                k++;
            } else {
                stop = true;
            }
        }
        if(stop) {
            stringCut[l] = stringCut[l].replace(stringCut[l][k], stringCut[l][k].toUpperCase());
        }
    }
    properCaseString = stringCut.join(" ");
    textarea.value = properCaseString;
}
sentenceCase.onclick = function () {
    stringToChange = textarea.value.toLowerCase();
    stringToChange = stringToChange.trim();
    stringCut = stringToChange.split(".");
    numberOfSentences = stringCut.length;
    for (let i=0 ; i<numberOfSentences ; i++) {
        console.log(j, stringCut[i].length,stop2);
        stop2 = false;
        while (!stop2 && j<stringCut[i].length)
        {
            if(stringCut[i][j].match(regex) === null && stringCut[i][j].match(regex2) === null){
                j++;
            } else {
                stop2 = true;
            }
        } if(stop2) {
            stringCut[i] = stringCut[i].replace(stringCut[i][j], stringCut[i][j].toUpperCase());
        }
    }
    sentenceCaseString = stringCut.join(".");
    textarea.value = sentenceCaseString;
}