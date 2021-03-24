// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var strike;
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying=false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

function startGame(){
  progress = 0;  //what round it is
  strike=0;
  pattern=[];
  for (var i=0;i<8;i++){ //choose 8 random patterns
    var s=Math.floor(Math.random()*(8-1+1))+1
    pattern.push(s);
    console.log(s);
  }
  gamePlaying = true; //game is playing
  document.getElementById("startBtn").classList.add("hidden"); //hides start button
  document.getElementById("stopBtn").classList.remove("hidden"); //shows stop button
  playClueSequence();  //play clue
}
function stopGame(){
    //initialize game variables
  gamePlaying = false; //stop playing game
  document.getElementById("startBtn").classList.remove("hidden"); //hides stop button
  document.getElementById("stopBtn").classList.add("hidden"); //show start button
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 100,
  6: 900,
  7: 800,
  8: 500
}
function playTone(btn,len){ //automatically play tone for x milliseconds
  o.frequency.value = freqMap[btn]   //choose sound of each button
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){      //after x milliseconds stop
    stopTone()
  },len)
}
function startTone(btn){  //play it when pressed(not computer pressing)
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){    //stop playing
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){ //add lit class to button temporarily to make it light up
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){ //remove class
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);  //lights button number 
    playTone(btn,clueHoldTime); //plays button for clueHoldTime milliseconds
    setTimeout(clearButton,clueHoldTime,btn);  //clears button number after .333 milliseconds
  }
}
function playClueSequence(){
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    clueHoldTime-=16;
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){  //if not playing game quit
    return;
  }
  if (btn === pattern[guessCounter] ){   //if the guess is correct
    if (guessCounter===progress){
      if (progress===pattern.length-1){    //if on last turn and you get it right you win
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else if (strike !=2){
    strike++;
    alert("Strike "+strike+"! Try again.");
    playClueSequence();
  }
  else{
    loseGame();
    stopGame();
  }
}

