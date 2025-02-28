// Getting all elements needed for an email
var emailInput = document.getElementById("email");
var validateButton = document.getElementById("Validate");
var message = document.getElementById("validationMessage");

// default message to "empty"
message.style.display = "block";
message.innerHTML = ""; // Start with an empty message

validateButton.addEventListener("click", function () {
    var email = emailInput.value; 

    var hasAtSymbol = email.includes("@");
    var hasDot = email.includes(".");
    var lastPartAfterDot = email.split('.').pop(); // the pop is returning the last part after dot(to validate it)

    // The main validate email part: check if it has an @, a dot, and two or more characters after the dot
    if (hasAtSymbol && hasDot && lastPartAfterDot.length >= 2) {
        message.style.color = "green";
        message.innerHTML = email + " is correct :)";
    } else {
        message.style.color = "red";
        message.innerHTML = email + " is incorrect :(";
    }
});
