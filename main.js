var root = document.documentElement
var body = document.getElementsByTagName("body")[0]
var loading = document.getElementById("loading")
var svg = document.getElementsByTagName("svg")[0]
var originalsvg = svg.getBoundingClientRect()

window.scrollTo(0, 0)
window.onscroll = function() {
    window.scrollTo(0, 0)
}

setTimeout(function () {
    svg.style.transition = "2s ease-in-out"
    svg.style.transform = "translate(0, 0)"
    svg.style.left = "30px"
    svg.style.top = "30px"
    svg.setAttribute("width", originalsvg.width * 0.6 + "px")
    svg.setAttribute("height", originalsvg.height * 0.6 + "px")
    svg.setAttribute("stroke-width", 5)
    setTimeout(function () {
        svg.style.transition = 0
        loading.style.opacity = 0
        root.style.setProperty("--scrollbar", "purple")
        setTimeout(function () {
            body.style.transitionDuration = 0
            loading.style.display = "none"
            window.onscroll = function() {}
        }, 1000)
    }, 2000)
}, 6000)

//lägga till loading animation (såndär hjulgrej)