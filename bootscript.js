document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    logo.addEventListener("click", function() {
        preloader.classList.add("ripple-effect");

        setTimeout(function() {
            preloader.classList.add("hidden");
            content.classList.remove("hidden");
            document.body.style.overflow = "auto";  
        }, 1500);
    });
});
