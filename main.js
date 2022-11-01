var logo = document.getElementById("logo")
var loading = document.getElementById("loading")
setTimeout(function () {
    logo.style.left = "10px"
    logo.style.top = "10px"
    setTimeout(function () {
        loading.style.opacity = 0
        setTimeout(function () {
            loading.style.display = "none"
        }, 1000)
    }, 3000)
}, 6000)
