import { congratulations } from "./gameLogic.js"

export function timer(){
  let timer = document.querySelector('.timer')



  let timerOn = setInterval(function(){
    timer.value = Number(timer.value) + 1
    console.log(congratulations());
    if (congratulations() === true){
      clearInterval(timerOn); 
    }
  }
 ,1000)



}

 
