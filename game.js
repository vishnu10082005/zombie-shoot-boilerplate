// Iteration 1: Declare variables required for this game
let gameBody=document.getElementById("game-body")
let    timerBox=document.getElementById("timer")
let zombieId=0
let zombieImages=["zombie-1.png", "zombie-2.png", "zombie-3.png", "zombie-4.png", "zombie-5.png", "zombie-6.png"]

// Iteration 1.2: Add shotgun sound
let shotgun=new Audio("./assets/shotgun.wav")
gameBody.oneclick=()=>{
    shotgun.pause()
    shotgun.currentTime=0
    shotgun.play()
    
}

// Iteration 1.3: Add background sound
let bgmi=new Audio("./assets/shot/bgm.mp3")

bgmi.play()
bgmi.loop=true


// Iteration 1.4: Add lives
let lives=4
// Iteration 2: Write a function to make a zombie
function makeZombie(){
    let zombie=document.createElement("img")
    gameBody.appendChild(zombie)
    let zomImg=zombieImages[getRandomInt(0,zombieImages.length)]
    zombie.src=`./assets/${zomImg}`
    zombie.classList.add("zombie-image")

    zombie.id="zombie"
    // zombie.style.position="absolute"
    // zombie.style.left="100px"
    // zombie.style.top="100px"
    // zombie.style.width="100px"
    // zombie.style.height="100px"
    // zombie.style.borderRadius="100px"
    // zombie.style.border="2px solid black"
    // zombie.style.boxShadow="0 0 10px black"
    zombie.id=`zombie${zombieId}`
    zombie.style.transition="all 1s ease-in-out"
    zombie.style.animationDuration=`${getRandomInt(2,3)}s`
    zombie.style.transform=`translateX(${getRandomInt(20,80)}vw)`

    // zombie.style.zIndex="1"
zombie.onclick=()=>{
    zombiekill(zombie)
}
}
makeZombie()
// Iteration 3: Write a function to check if the player missed a zombie
// function 
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombiekill(zombie){
zombie.style.display = 'none'
zombieId++
makeZombie(zombie)}
// Iteration 5: Creating timer
function startTimer(){
    let time=60;
    setInterval(()=>{
        time--
        timerBox.textContent=time;
        if(time==0){
            window.location.href="./win.html"
        }
    },1000)
}
startTimer()
// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
function getRandomInt(min,max)  {
   let randomInt=Math.floor(Math.random()*(max-min))+min
   return randomInt;
    // min=Math.ceil(min)
    // max=Math.floor(max)
    // return Math.floor(Math.random()*(max-min+1)+min)
}
