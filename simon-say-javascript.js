let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highestscore=0;
let btns=["yellow","red","purple","green"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("Game Started");
        started=true;
        LevelUp();
    }
})

function gameFlash(bt){
    bt.classList.add("flash");
    setTimeout(function(){
        bt.classList.remove("flash");
    },300);
}

function userFlash(bt){
    bt.classList.add("userflash");
    setTimeout(function(){
        bt.classList.remove("userflash");
    },300);
}
function LevelUp(){
    
    
    userSeq=[];
    level++;
    updatehighscore(level);
    h3.innerText="Level"+" "+level;
    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=btns[randomindex];
    console.log(gameSeq);
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameFlash(randombtn);
    gameSeq.push(randomcolor);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(randombtn);
}
function updatehighscore(level){
    let high=document.querySelector("h4");
    highestscore=Math.max(level,highestscore);
    high.innerText="Highest Score is "+highestscore;
   
    
    // high=document.querySelector("h4");

}
function chkans(indx){
if(userSeq[indx] == gameSeq[indx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(LevelUp,1000);
    }
}

else{
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();  
   }
}
function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    let useridx=userSeq.length-1;
    chkans(useridx);
}

let allbtn=document.querySelectorAll(".box");
for(bnt of allbtn){
    bnt.addEventListener("click",btnpress);
}
function reset(){
    
    h3.innerHTML=`Game Over! Your Score is <b>${level}</b><br> Press Any Key Again`; 
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}