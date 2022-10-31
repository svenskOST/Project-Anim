var startup = document.getElementsByClassName("startup")
setTimeout(function () {
    startup.style.opacity = 0
    setTimeout(function () {
        startup.style.display = "none"
    }, 1000)
}, 4000)