var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-text");

serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return  serverURL + "?" + "text= " + text
}
// Error Handling
function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong the server! try again after sometime")
}
// Processing Input
function clickHandler(){
    var inputText = inputTxt.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => { 
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener ("click", clickHandler);