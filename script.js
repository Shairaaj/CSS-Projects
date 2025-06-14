const remainingEl= document.getElementById("remaining-counter");
const textareaEl= document.getElementById("textarea");
const totalcountEl=document.getElementById("total-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCount();
})

let count=50;

function updateCount(){
    totalcountEl.innerHTML= textareaEl.value.length;
    remainingEl.innerHTML= 50-textareaEl.value.length;
}
