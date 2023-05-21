import { startGame } from "../script.js";
import { clickButton } from "./gameLogic.js";
import { timer } from "./timer.js";

export let mineFiledArr = [];
export let twoDimensionalArr;
export let countBomb = 10;
export let sideSize = 10;
export let timerState = false;

export function createMatrix (){

  for (let i = 0; i < sideSize ** 2; i++){
    mineFiledArr[i] = 0;
  }

  let numberArr = [];
  
  for (let i = 0; i < mineFiledArr.length; i++){
    numberArr.push(i);
  }

  let randomNumberArr = [];

  for (let i = 0; i < countBomb; i++){
    let randomNumber = Math.floor(Math.random() * (numberArr.length));
    randomNumberArr.push(numberArr[randomNumber])
    numberArr.splice(randomNumber, 1);
  }


  for (let i = 0; i < countBomb; i++){
    mineFiledArr.splice(randomNumberArr[i], 1, 1);
  }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  twoDimensionalArr = chunkArr(mineFiledArr, sideSize);
  console.log(mineFiledArr.length)
}

export function choosenDifficulty(){
  let buttons = document.querySelectorAll('.button');
  console.log(buttons)
  buttons.forEach((button) =>{
    button.addEventListener('click', function(event){
      if (event.target.classList.contains('easy')){
        countBomb = 10;
        sideSize = 10;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('normal')){
        countBomb = 20;
        sideSize = 15;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('hard')){
        countBomb = 30;
        sideSize = 25;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
    })
  })
}

export function turnOnTimer(){
  let cells = document.querySelectorAll('td')
  console.log(cells);

  cells.forEach((cell) => {
    cell.addEventListener('mousedown', function(event){
      if (!timerState){
        timer();
        timerState = true;
      }
    })
  })
}
