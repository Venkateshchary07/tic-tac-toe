
const winningPattern=[[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]];
let boxes=document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let player = true;
let count=0;
let iswinner=false;
let msgcontainer= document.querySelector('.msg-container');
let newButton = document.querySelector('.newgame');
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(player){
            box.innerHTML='O';
            player=false;
        }else{
            box.innerHTML='X';
            player=true;
        }  
        count++;
        box.disabled=true;
        if(count>=5){
            checkWinner();
        }
        if(count === 9 && !iswinner){
                gameDraw();
        }

    });

});
const checkWinner =()=>{
    for(let pattern of winningPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val !== '' && pos2val !== ''&& pos3val !== ''){
            if(pos1val===pos2val && pos2val ===pos3val){
                  showWinner(pos1val);
                  iswinner=true;
            }
        }

    }
}
const showWinner = (winner) =>{
    document.getElementById("msg").innerText = `Congratulations! ${winner} is the winner`; // Only update text
    msgcontainer.classList.remove('hide');
    newButton.classList.remove('hide');
    msgcontainer.style.height='600px';
    disabledAllboxes();
}

const resetgame = () =>{
        player =true;
        count=0;
        iswinner=false;
        msgcontainer.classList.add('hide');
        enableAllboxes();  
    }
const enableAllboxes = ()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerHTML='';
        }
}
const disabledAllboxes=()=>{
     for(let box of boxes){
            box.disabled=true;
        }
}
const gameDraw = ()=>{
    document.getElementById("msg").innerText = "Game is Draw!!, please Start Again";
    msgcontainer.classList.remove('hide');      
    newButton.classList.remove('hide');
    disabledAllboxes();
}
newButton.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);


