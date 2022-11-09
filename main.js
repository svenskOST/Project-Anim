var loading = document.getElementById("loading")
var content = document.getElementById("content")
var logo = document.getElementById("logo")
var originallogo = logo.getBoundingClientRect()

window.scrollTo(0, 0)
window.onscroll = function() {
    window.scrollTo(0, 0)
}

setTimeout(function () {
    logo.style.transition = "2s ease-in-out"
    logo.style.transform = "translate(0, 0)"
    logo.style.left = "30px"
    logo.style.top = "30px"
    logo.setAttribute("width", originallogo.width * 0.6 + "px")
    logo.setAttribute("height", originallogo.height * 0.6 + "px")
    logo.setAttribute("stroke-width", 5)
    setTimeout(function () {
        logo.style.transition = 0
        loading.style.opacity = 0
        setTimeout(function () {
            loading.style.display = "none"
            window.onscroll = function() {}
            content.appendChild(logo)
        }, 1000)
    }, 2000)
}, 5000)

//lägga till loading animation (såndär hjulgrej)
//för att fixa att logo inte hänger med vid scroll: appendchild så den tillhör #content igen när man kan skrolla igen