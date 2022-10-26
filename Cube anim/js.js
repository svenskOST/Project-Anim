var cubes = document.querySelectorAll("span");
for(let i = 0;i<cubes.length;i++){
    
    let ni = cubes[i]
    
    let after = window.getComputedStyle(ni,"::after")
    let before = 
    console.log(before)
    ni.addEventListener("mouseenter",function(){
        ni.style.transitionProperty = "all"
        ni.style.transitionDuration = "0.5s"
        let hsl = "hsl(" + Math.random() * 360 + ",100%,50%)"
        ni.style.background = hsl
        
    })
    ni.addEventListener("mouseleave",function(){
        ni.style.transitionDuration = "0.8s"
        ni.style.background = "rgb(220,220,220)"
    })

}