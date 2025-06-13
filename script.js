const formEl= document.getElementById("form");
const scoreEl= document.getElementById("score");
const queEl= document.getElementById("que");
const inputEl= document.getElementById("input");
const resetEl= document.getElementById("reset");

const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);


queEl.innerHTML=`What is ${num1} multiplied by ${num2} ?`;

const correctAns= num1*num2;
let score=+localStorage.getItem("score");

formEl.addEventListener("submit",()=>{
    const userAns= +input.value;
    console.log(userAns);
    
    if(userAns===correctAns){
        localStorage.setItem("score",score+1);
        console.log(score);
    }
    else{
        localStorage.setItem("score",score-1);
        console.log(score);
    }
}
)
resetEl.addEventListener("click",()=>{
    localStorage.setItem("score",0);
    scoreEl.innerHTML = `Score: ${+localStorage.getItem("score")}`;
})
scoreEl.innerHTML=`Score: ${score}`;