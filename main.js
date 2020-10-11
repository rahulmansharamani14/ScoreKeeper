var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var reset=document.querySelector("#resetbutton");
var input=document.querySelector("#input");
var winscoredisplay=document.querySelector("#num");
var p1score=0;
var p2score=0;
var winscore=5;
var gameover = false;


console.log(p1display);

p1button.addEventListener("click",function () {
    if(!gameover){
        p1score++;
        if(p1score === winscore){
            console.log(p1score,winscore);
            p1display.classList.add("winner");
            gameover=true;
        }
        p1display.textContent=p1score;
    }
});


p2button.addEventListener("click",function () {
    if (!gameover) {
        p2score++;
        if (p2score === winscore) {
            p2display.classList.add("winner");
            gameover=true;
        }
        p2display.textContent=p2score;
    }
});

reset.addEventListener("click",function(){
    reseted();
});

function reseted() {
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover=false;    
}

input.addEventListener("change",function(){
    winscoredisplay.textContent=input.value;
    winscore=Number(input.value);
    reseted();
});