//create Variables
const url ="https//baconipsum.com/api/?type=meat-and-filler&paras=1"
const button =document.getElementById("loadBtn");
const message =document.getElementById ("messageText");

//Create a click event listener on the Button
button.addEventListener("click", fetchMessage);

//Create async function that sends fetch request
 async function fetchMessage() {
    try{
        const response = await fetch (url);
        const data = await response.json();

        message.textContent = data[0];
    }catch (error){
        MediaKeyMessageEvent.textContent = "Oops! Something went wrong.";
        message.style.color = "red";
        console.log("Fetch error:, error");
    }

    
    }
 