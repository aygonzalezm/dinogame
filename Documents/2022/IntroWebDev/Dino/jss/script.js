const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//function that makes dino jump
function jump(){
    if (dino.classList != "jump"){
    dino.classList.add("jump");
    //call function to remove jump after 300 ms
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
    }
}

let isAlive = setInterval(function(){
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    //detect collision
    if (cactusLeft <50 && cactusLeft>0 && dinoTop >=140)
    alert("Game Over");
}, 10);

//Event Listener to perform jump function when any key is pressed 
document.addEventListener("keydown", function (event){
    jump();
});