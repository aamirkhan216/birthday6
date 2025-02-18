// Confetti Animation
function startConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
    }
}

// Kiss Animation when clicking gifts
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

// Add event listeners to gifts
document.addEventListener("DOMContentLoaded", function () {
    startConfetti();
    
    document.querySelectorAll(".gift").forEach(gift => {
        gift.addEventListener("click", function (event) {
            showKissAnimation(event.clientX, event.clientY);
        });
    });
});
