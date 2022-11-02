var theme = document.getElementById("themeselector")
var svg = document.getElementsByTagName("svg")[0]
var scrollbar = document.getElementsByName("::-webkit-scrollbar")

if(theme == "standard"){
    svg.setAttribute("stroke", "purple")
    scrollbar.style.background = "purple"
}

if(theme == "matteblack"){
    svg.setAttribute("stroke", "black")
    scrollbar.style.background = "black"
}

if(theme == "neon"){
    svg.setAttribute("stroke", temp)
    scrollbar.style.background = temp
}

if(theme == "rgb"){
    svg.setAttribute("stroke", temp)
    scrollbar.style.background = temp
}

//scrollbar funkar inte än, bara som placeholder (vet inte hur jag kan accessa ::-webkit-scrollbar)