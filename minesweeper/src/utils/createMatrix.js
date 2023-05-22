import { startGame } from "../script.js";
import { gameOver } from "./gameLogic.js";
import { timer } from "./timer.js";

export let mineFiledArr = [];
export let twoDimensionalArr;
export let countBomb = 10;
export let countBombTable;
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
}


// settings of the sideSize and countBomb
export function choosenDifficulty(){
  let buttons = document.querySelectorAll('.button');
  buttons.forEach((button) =>{
    button.addEventListener('click', function(event){
      if (event.target.classList.contains('easy')){
        sideSize = 10;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('normal')){
        sideSize = 15;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('hard')){
        sideSize = 25;
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('new-game')){
        mineFiledArr = [];
        timerState = false;
        startGame();
      }
      else if (event.target.classList.contains('change-theme')){
        let mineFiled = document.querySelector('.minesweeper-project');
        mineFiled.classList.toggle('dark-theme');
      }
    })
  })
}

export function choosenCountOfMines(){
  let inputFiled = document.querySelector('.input-count-value');
  console.log(inputFiled.value)
  inputFiled.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
        if (inputFiled.value > 99){
          countBomb = 99;
          mineFiledArr = [];
          timerState = false;
          startGame();
        }
        else if (inputFiled.value < 1){
          countBomb = 1;
          mineFiledArr = [];
          timerState = false;
          startGame();
        }
        else{
          countBomb = inputFiled.value;
        mineFiledArr = [];
        timerState = false;
        startGame();
        }
    }
  })
}

export function chooseInNotification(){
  // console.log(gameOver());
  let refreshGame = document.querySelector('.refresh-game');
  refreshGame.addEventListener('click', () =>{
    mineFiledArr = [];
    timerState = false;
    startGame();
  })
}


// setting of timer
export function turnOnTimer(){
  let cells = document.querySelectorAll('td')
  cells.forEach((cell) => {
    cell.addEventListener('mousedown', function(event){
      if (!timerState){
        timer();
        timerState = true;
      }
    })
  })
}


