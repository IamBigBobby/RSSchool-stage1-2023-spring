import { createTable, addMines } from "./utils/createFiled.js";
import { createMatrix } from "./utils/createMatrix.js";

export let countBomb = 20;
export let sideSize = 15;

function startGame(){
  createMatrix();
  createTable();
  addMines();
  
  let buttons = document.querySelectorAll('.button');
  console.log(buttons)
  buttons.forEach((button) =>{
    button.addEventListener('click', function(event){
      if (event.target.classList.contains('easy')){
        sideSize = 10;
        startGame();
      }
      else if (event.target.classList.contains('normal')){
        sideSize = 15;
        startGame();
      }
      else if (event.target.classList.contains('hard')){
        sideSize = 25;
        startGame();
      }
    })
  })
}
startGame();