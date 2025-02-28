// List of images to change
var images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
    'https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo-2048x1280.png',
    'https://miro.medium.com/v2/resize:fit:640/format:webp/1*tZHcs0d7MAG-BBcjBekZYA.png',
    'https://www.netgen.co.za/wp-content/uploads/2023/05/SQL-Database.png.webp'
];

var changeImageButton = document.getElementById("changeImageButton");
var userImage = document.getElementById("userImage");
var autoImage = document.getElementById("autoImage");

var currentImageIndex = 0;

userImage.src = images[currentImageIndex];

// Function to change the user-selected image when the button is clicked
changeImageButton.addEventListener("click", function() {
    userImage.src = images[currentImageIndex];  
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
});

// Function to auto load images sequentially every 4 images
setInterval(function() {
    autoImage.src = images[currentImageIndex];  

    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
}, 1000);  // Update every second
