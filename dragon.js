// let score = 0;
document.addEventListener('DOMContentLoaded',()=>{
     score = 0;
     destiny = true;
     audio = new Audio('start.mp3');
     audioend = new Audio('death.mp3');
     setTimeout(() => {
         audio.play();
     }, 1500);
var dino = document.querySelector(".dino");
var obstacle = document.querySelector(".obstacle");
var gameover = document.querySelector(".gameover");
// let isjumping=false;
function control(e){
    if(e.keyCode===38){
            jump();
        }
        else if(e.keyCode===39){
            dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left = dinoX + 112 + "px";
            
        }
        else if(e.keyCode===37){
            dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left = (dinoX - 112) + "px";
            
        }
    }


document.addEventListener('keyup',control);

function jump(){
    dino.classList.add('animatedino');
    setTimeout(() => {
        dino.classList.remove("animatedino");
    }, 500);
}
setInterval(() => {
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    // console.log(offsetX,offsetY)
    if(offsetX<43 && offsetY<52){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        audioend.play();
        setTimeout(() => {
            
            audio.pause();
        }, 500);
        setTimeout(() => {
            audioend.pause();
        }, 5000);
    }
    else if(offsetX<145 && destiny){
        score+=1;
        update(score);
        destiny = false;
        setTimeout(() => {
            destiny = true;
        }, 1500);
        setTimeout(() => {
            anidur = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur = anidur;
            obstacle.style.animationDuration = newdur + 's'; 
            console.log("new: ",newdur);
        }, 800);
        
    }

}, 100);
 function update(score){
     scorecon.innerHTML = "Your Score: "+score;
}
})
// function update(score){
//     scorecon.innerHtml = "Your Score: "+score;
// }

