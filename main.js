var loading = document.getElementById("loading")
var svg = document.getElementsByTagName("svg")[0]
var originalsvg = svg.getBoundingClientRect()

setTimeout(function () {
    //logo.style.left = "100px"
    svg.setAttribute("width", originalsvg.width * 0.5 + "px")
    svg.setAttribute("height", originalsvg.height * 0.5 + "px")
    svg.setAttribute("stroke-width", 6)
    setTimeout(function () {
        loading.style.opacity = 0
        setTimeout(function () {
            loading.style.display = "none"
        }, 1000)
    }, 3000)
}, 6000)