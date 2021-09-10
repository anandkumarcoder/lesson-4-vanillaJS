var btnTranslate = document.querySelector("#btn-translate");
// this is referrence to button in html.query selector selects a particular element  from HTML document.

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Anand"//

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
};

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server try again after sometime")
};




function clickHandler()

{
    // outputDiv.innerText = "hahahaha " + txtInput.value;
    var inputText = txtInput.value; //taking input

    //processing by calling the server

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;

            outputDiv.innerText = translatedText;
        }) //output
        .catch(errorHandler)
};


// ^Above function will give clicked as output

// calling the server fro processing 



btnTranslate.addEventListener("click", clickHandler);


// ^when event click happens perform function clickhandler. here callback to fucntion happening