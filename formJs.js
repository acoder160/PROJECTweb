var emailInput = document.getElementById("email");
var validateButton = document.getElementById("Validate");
var message = document.getElementById("validationMessage");


message.style.display = "block";
message.innerHTML = ""; // we wil store the final message about email validation here

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

// dropdown the proviences if navarra is selected 

var countrySelect = document.getElementById("options");
var provincesContainer = document.getElementById("container");


countrySelect.addEventListener("change", function() {
    if (countrySelect.value === "Spain") {
        provincesContainer.style.display = "block";
    } else {
        provincesContainer.style.display = "none";
    }
});

// same dropdown but for towns if navarra is selected


var provincesSelect = document.getElementById("provinces");
var townsContainer = document.getElementById("towns-container");


provincesSelect.addEventListener("change", function() {
    if (provincesSelect.value === "Navarra") {
 
        townsContainer.style.display = "block";
    } else {
 
        townsContainer.style.display = "none";
    }
});
