// Start confetti animation
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = Math.random() * 100 + "vh";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);
    }
}

// Random color generator for confetti
function getRandomColor() {
    let colors = ["red", "blue", "yellow", "green", "purple", "pink", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Show a kiss animation on click
function showKissAnimation(x, y) {
    let kiss = document.createElement("div");
    kiss.classList.add("kiss");
    kiss.innerHTML = "💋";
    kiss.style.left = x + "px";
    kiss.style.top = y + "px";
    document.body.appendChild(kiss);

    setTimeout(() => {
        kiss.remove();
    }, 1500);
}

// Run animations when page loads
document.addEventListener("DOMContentLoaded", function () {
    startConfetti();
});
