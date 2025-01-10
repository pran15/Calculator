const display=document.getElementById("display");
const buttons=document.querySelectorAll(".button");

let currAns="";
function updateDisplay(value){
    display.value=value;
}

buttons.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        const number=buttons.innerHTML;
        if(number=="AC"){
         currAns="";
         updateDisplay("0");
        }
        else if(number=="DEL"){
            currAns=currAns.slice(0,-1);
            updateDisplay(currAns||"0");
        }
        else if(number=="ANSWER"){
            currAns=eval(currAns).toString();
            updateDisplay(currAns);
        }
        else{
            currAns+=number;
            updateDisplay(currAns);
        }


    });
});
