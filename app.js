var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");


// outputDiv.innerText = "Anand";



// whenver there is event click on btn give click

// btnTranslate.addEventListener("click" , function clickEventHandler() {
//     console.log("clicked!")
// } ); 

// new way of doing the same thing as above

function clickHandler()

{
    outputDiv.innerText = "hahahaha " + txtInput.value;
};


// ^Above function will give clicked as output

btnTranslate.addEventListener("click", clickHandler);


// ^when event click happens perform function clickhandler. here callback to fucntion happening