import { countBomb, sideSize, twoDimensionalArr } from "./createMatrix.js";
import { gameOverStatus, safeCells } from "./gameLogic.js";


export function timer(){
  let timer = document.querySelector('.timer');



  let timerOn = setInterval(function(){
    console.log(gameOverStatus)
    if ( safeCells === sideSize ** 2 - countBomb || gameOverStatus == true){
      clearInterval(timerOn); 
    }
    timer.value = Number(timer.value) + 1;
    console.log(timer.value)
    return timer.value
  }
 ,1000)

  return timer.value
}

 
