const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

// Function to show the popup and lock scrolling
function showPopup() {
    const timeLimit = 4; // seconds
    let i = 0;
    const timer = setInterval(function() {
        i++; 
        if (i >= timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
            document.body.classList.add("locked"); // Lock scrolling
        }
        console.log(i);
    }, 1000);
}

// Function to hide the popup and unlock scrolling
function hidePopup() {
    loginPopup.classList.remove("show");
    document.body.classList.remove("locked"); // Unlock scrolling
}

// Event listener for the close button
close.addEventListener("click", hidePopup);

// Optionally, if you want to show the popup when the page loads
window.addEventListener("load", function() {
    showPopup();
});
