var loading = document.getElementById("loading")
var svg = document.getElementsByTagName("svg")[0]
var originalsvg = svg.getBoundingClientRect()

setTimeout(function () {
    svg.style.position = "absolute"
    svg.style.left = "30px"
    svg.style.top = "30px"
    svg.setAttribute("width", originalsvg.width * 0.6 + "px")
    svg.setAttribute("height", originalsvg.height * 0.6 + "px")
    svg.setAttribute("stroke-width", 5)
    setTimeout(function () {
        loading.style.opacity = 0
        setTimeout(function () {
            loading.style.display = "none"
        }, 1000)
    }, 3000)
}, 6000)