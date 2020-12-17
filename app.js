//Input
var translateInput = document.querySelector("#translate-ip"); 
var translateButton = document.querySelector("#translate-btn"); 
var translateOutput = document.querySelector("#translate-op");

var url = "https://api.funtranslations.com/translate/minion.json";


function translateHandler(ip){
    var updateUrl = url + "?" + "text=" + ip ; 
    console.log(updateUrl);
    return updateUrl;
}
function clickHandler() {
    //Input value
    var ip = translateInput.value; 

    //Processing
    fetch(translateHandler(ip))
    .then(res => res.json()
    ).then(json => {
        console.log(json)
        var translatedText = json.contents.translated;
        translateOutput.innerText = translatedText;  // output
    }).catch(() => alert('Something Went wrong'))
}

translateButton.addEventListener('click',clickHandler);