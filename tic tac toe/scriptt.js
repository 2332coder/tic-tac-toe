let boxes=document.querySelectorAll('.btn');
let turn0=true;
let para=document.querySelector("p")
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,5,8],
    [3,4,5],
    [6,7,8],

];
for (let box of boxes) {
    box.addEventListener("click", ()=> {
        console.log("button clicked");
        if (turn0) {
            box.innerHTML = "O";  // Use 'this' to refer to the current box
            turn0 = false;
        }
         else {
            box.innerHTML = "X";
            turn0 = true;  // Make sure turn is toggled properly
        }
        box.disabled=true;
        checkwinner();
    });
}
checkwinner=()=>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0===pos1&&pos1===pos2){
                console.log('winner');
                para.innerText=`${pos0} is the winner`;
                for(let box of boxes){
                    box.disabled=true;
                }
            }
        }
    }
}

let rstbtn=document.querySelector('.rstbtn');
rstbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        para.innerText="";
    }
    turn0=true;
})
