// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide the scroll-to-top button
window.addEventListener('scroll', function() {
    const button = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const curtainScreen = document.getElementById("curtain-screen");
    const curtainTrigger = document.getElementById("curtain-trigger");
    const textElements = document.querySelectorAll("#curtain-screen h1 span");

    // Function to restart the text animation
    function restartTextAnimation() {
        // Remove the animation class
        textElements.forEach((el) => {
            el.style.animation = "none";
        });

        // Trigger a reflow to reset the animation
        void curtainScreen.offsetWidth;

        // Reapply the animation class
        textElements.forEach((el) => {
            el.style.animation = "";
        });
    }

    // Show the curtain on page load
    curtainScreen.classList.add("show");

    // Hide the curtain after 3 seconds
    setTimeout(() => {
        curtainScreen.classList.remove("show");
        curtainScreen.classList.add("hide");
    }, 3000);

    // Re-trigger the curtain when clicking the portfolio link
    curtainTrigger.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Restart the text animation
        restartTextAnimation();

        // Re-show the curtain
        curtainScreen.classList.remove("hide");
        curtainScreen.classList.add("show");

        // Hide the curtain again after 3 seconds
        setTimeout(() => {
            curtainScreen.classList.remove("show");
            curtainScreen.classList.add("hide");
        }, 3000);
    });
});
