var root = document.documentElement
var theme = document.getElementById("themeselector")
var svg = document.getElementsByTagName("svg")[0]

if(theme == "standard"){
    svg.setAttribute("stroke", "purple")
    root.style.setProperty("--scrollbar-color", "purple")
    root.style.setProperty("--scrollbar-hover", "rgb(100, 0, 100)")
}

if(theme == "matteblack"){
    svg.setAttribute("stroke", "black")
    root.style.setProperty("--scrollbar-color", "black")
    root.style.setProperty("--scrollbar-hover", "grey")
}

if(theme == "neon"){
    svg.setAttribute("stroke", temp)
    root.style.setProperty("--scrollbar-color", temp)
    root.style.setProperty("--scrollbar-hover", temp)
}

if(theme == "rgb"){
    svg.setAttribute("stroke", temp)
    root.style.setProperty("--scrollbar-color", temp)
    root.style.setProperty("--scrollbar-hover", temp)
}