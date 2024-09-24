let x = document.querySelector(".contan")
let btn = document.querySelector(".move")
let yes = document.querySelector(".yes")
let img = document.querySelector("img")
let audio = document.querySelector(".play")
btn.onmouseenter= ()=>{
    btn.style.position="fixed"
    // let topl =Math.floor(Math.random()*((x.offsetHeight-100)-0+1)+0)
    // let leftl =Math.floor(Math.random()*((x.offsetHeight-100)-0+1)+0)
    let topl =Math.floor(Math.random()*x.offsetHeight)
    let leftl =Math.floor(Math.random()*x.offsetWidth)
    if(topl>x.offsetHeight-100 ||leftl>x.offsetWidth-100){
        while(true){
            topl =Math.floor(Math.random()*x.offsetHeight);
            leftl =Math.floor(Math.random()*x.offsetWidth);
            if(topl<x.offsetHeight-100 && leftl<x.offsetWidth-100){
                btn.style.top=`${topl}px`;
                btn.style.left=`${leftl}px`;
                break;
            }
        }
    }
    else{

        btn.style.top=`${topl}px`;
        btn.style.left=`${leftl}px`;
    }
}

yes.addEventListener("click",()=>{
    x.remove()
    img.style.display="block"
        audio.play()
    let interval = setInterval(()=>{
        audio.currentTime =0
        audio.play()
    },2300)
})