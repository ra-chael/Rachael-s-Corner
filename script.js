/*notification (every time the header is clicked)*/
function clickHeader(){
    alert("Hello explorer,\nrefer to the navigation bar if you get lost :)");
}



/*event handler (when footer is hovered over)*/
let footer = document.getElementById("footer-box");

footer.addEventListener("mouseover", hoverWave);

function hoverWave() {
    footer.style.textDecorationLine="underline";
    footer.style.textDecorationStyle="wavy";
    footer.style.textDecorationColor="white";
}



/*conditional (keeping track of how many clicks the user makes on any spot on a single page that isn't a button)*/

let clicks = 0;

document.addEventListener("click", addClick);

function addClick() {
    clicks++;

    if (clicks == 5) {
        alert("You have made 5 random clicks so far (yes, I'm keeping count)!\nYou just unlocked a secret game, so keep clicking to earn a special prize :0");
    }
    else if (clicks == 20) {
        alert("You have made 20 clicks.\nEach click is worth a point, so keep going!");
    }
    else if (clicks == 50) {
        alert("You've earned 50 points so far,\n        you win... this tiny 'gold' star! ⋆\nThanks for playing.");
    }
}



/*Colour changer (toggle buttons located at the bottom of each page)*/
function colorButton1() {
    document.getElementById("title-box").style.color="#65D9E4";
    document.getElementById("nav-box").style.backgroundColor="#FFE173";
    document.getElementById("main-box").style.backgroundColor="#FF5D57";
    document.getElementById("footer-box").style.backgroundColor="#65D9E4";
}

function colorButton2() {
    document.getElementById("title-box").style.color="#E2AAEB";
    document.getElementById("nav-box").style.backgroundColor="#FAB3C2";
    document.getElementById("main-box").style.backgroundColor="#A9D3E9";
    document.getElementById("footer-box").style.backgroundColor="#E2AAEB";
}


/*form (on the contact page)*/
function validateForm() { 
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("user-message");
    
    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        
        /*function is only called for the required inputs*/
        const firstInput = document.getElementById("first").value;
        const lastInput = document.getElementById("last").value;
        const nickInput = document.getElementById("nickname").value;
        const telInput = document.getElementById("phone").value;
        const emailInput = document.getElementById("email").value;

        if (!firstInput || !lastInput || !nickInput || !telInput || !emailInput) {
            message.style.backgroundColor = "#FF8884";
            message.style.fontWeight = "bold";
            message.innerHTML = "Please fill in all required fields";        
        } else if (telInput.length < 10) {
            message.style.backgroundColor = "#FF8884";
            message.style.fontWeight = "bold";
            message.innerHTML = "Please enter a valid phone number. It must be all numbers (obviously) and 10 digits.";
        } else if(!(emailInput.endsWith("@gmail.com"))) {
            message.style.backgroundColor = "#FF8884";
            message.style.fontWeight = "bold";
            message.innerHTML = "Email is not valid. Please enter a valid email address. This includes all '@gmail.com' addresses.";
        } else {
            message.style.backgroundColor = "#CDDC68";
            message.style.fontWeight = "bold";
            message.innerHTML = "Welcome to the club!";
        }
    });
}

validateForm();

