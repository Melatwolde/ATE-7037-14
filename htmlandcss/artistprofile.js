document.addEventListener("DOMContentLoaded", function() {
    const pauseIcon = document.getElementById("pauseIcon");
    const playIcon = document.getElementById("playIcon");

    pauseIcon.addEventListener("click", function() {
        pauseIcon.classList.toggle("active");
        playIcon.classList.toggle("active");
    });

    playIcon.addEventListener("click", function() {
        pauseIcon.classList.toggle("active");
        playIcon.classList.toggle("active");
    });
});