var scrollbar = document.getElementById("scrollbar")
var loading = document.getElementById("loading")
var background = document.getElementById("background")
var content = document.getElementById("content")
var logo = document.getElementById("logo")
var originallogo = logo.getBoundingClientRect()
var anim1 = document.getElementById("anim1")

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
        scrollbar.style.transitionDuration = "1s"
        scrollbar.style.height = (window.innerHeight / (anim1.clientHeight * 4 + 130) * 100 + "%")
       
        setTimeout(function () {
            scrollbar.style.transitionDuration = "0s"
            loading.style.display = "none"
            content.appendChild(logo)
            
            background.onscroll = function() {
                var scrollfactor = background.scrollTop / (anim1.clientHeight * 4 + 130)
                scrollbar.style.top = window.innerHeight * scrollfactor + "px"
            }
            scrollbar.onmouseenter = scrolldrag
            function scrolldrag() {
                document.onmousedown = function() {
                    console.log("hi")
                    var scrollcurrent = background.scrollTop
                    let x = scrollcurrent // +/- musens rörelse
                    background.scrollTo(0, x)
                }
            }

        }, 1000)

    }, 2000)

}, 5000)