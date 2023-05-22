import { countBomb, sideSize } from "./createMatrix.js";
import { safeCells } from "./gameLogic.js";


export function timer(){
  let timer = document.querySelector('.timer')



  let timerOn = setInterval(function(){
    timer.value = Number(timer.value) + 1;
    if ( safeCells === sideSize ** 2 - countBomb){
      clearInterval(timerOn); 
    }
  }
 ,1000)



}

 
