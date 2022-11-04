var body = document.getElementsByTagName("body")[0]
var loading = document.getElementById("loading")
var svg = document.getElementsByTagName("svg")[0]
var originalsvg = svg.getBoundingClientRect()

window.scrollTo(0, 0)
window.onscroll = function() {
    window.scrollTo(0, 0)
}

setTimeout(function () {
    svg.style.transition = "3s ease-in-out"
    svg.style.transform = "translate(0, 0)"
    svg.style.left = "30px"
    svg.style.top = "30px"
    svg.setAttribute("width", originalsvg.width * 0.6 + "px")
    svg.setAttribute("height", originalsvg.height * 0.6 + "px")
    svg.setAttribute("stroke-width", 5)
    setTimeout(function () {
        body.style.transitionDuration = "1s"
        body.style.overflow = "visible"
        svg.style.transition = 0
        loading.style.opacity = 0
        setTimeout(function () {
            body.style.transitionDuration = 0
            loading.style.display = "none"
            window.onscroll = function() {}
        }, 1000)
    }, 3000)
}, 6000)

//göra så att scrollbar inte syns över loading screen --- body transitionDuration för overflow funkar ej
//lägga till loading animation (såndär hjulgrej)