const containerEl= document.querySelector(".container");

for( let i=0; i<30; i++){
    const colorContainerEl= document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    let str=randomColor();
    colorContainerEl.innerText=str;
    colorContainerEl.style.backgroundColor=str;
}
function randomColor(){
    const chars="0123456789abcdef";
    const colorlength=6;
    let color= '';

    for(let i=0; i<colorlength; i++){
        let c=Math.floor(Math.random()*20+1);
        if(c>15){
        c=c-5;
       }
       color+=chars[c];
       
    }
    return '#'+color;
}