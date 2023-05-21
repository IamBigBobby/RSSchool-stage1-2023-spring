
import { mineField } from "./createFiled.js";
import { sideSize, twoDimensionalArr } from "./createMatrix.js";

let gameWinArr = [];
let findBombs = 0;

export function clickButton(event){

  document.oncontextmenu = function(event){
    event.preventDefault();
  }
  if (event.button === 0){
    checkField(event.target.x, event.target.y);
  }
  else if (event.button === 2){
    console.log('right');
    addFlag(event);
  }
}

function checkField(x, y){

  if (twoDimensionalArr[y][x] === 1){
    console.log('game over');
  }
  else{
    checkAroundCells(x, y);
  }
}

function checkAroundCells(x, y){
  if (x > sideSize - 1 || y > sideSize - 1 || x < 0 || y < 0){
    return;
  }
  if (mineField.rows[y].cells[x].classList.contains('empty') || mineField.rows[y].cells[x].classList.contains('near-bomb') || mineField.rows[y].cells[x].classList.contains('flag')){
    return;
  }
  let numberOfBombs = 0;
  if(twoDimensionalArr[y][x - 1] === 1){
    numberOfBombs++;
  }
  if(twoDimensionalArr[y][x + 1] === 1){
    numberOfBombs++;
  }

  if (y - 1 >= 0){
    if (twoDimensionalArr[y - 1][x] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y - 1][x - 1] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y - 1][x + 1] === 1){
      numberOfBombs++;
    }
  }

  if (y + 1 <= sideSize - 1){
    if (twoDimensionalArr[y + 1][x] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y + 1][x - 1] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y + 1][x + 1] === 1){
      numberOfBombs++;
    }
  }

  if (numberOfBombs > 0){
    mineField.rows[y].cells[x].classList.add('near-bomb');
    mineField.rows[y].cells[x].innerHTML = numberOfBombs;
    return;
  }
  else{
    mineField.rows[y].cells[x].classList.add('empty');
    if (y >= 0 && y <= sideSize - 1 && x >=0 && x <= sideSize - 1){
      checkAroundCells(x + 1, y);
      checkAroundCells(x - 1, y);
      checkAroundCells(x, y + 1);
      checkAroundCells(x, y - 1);
      checkAroundCells(x + 1, y - 1);
      checkAroundCells(x + 1, y + 1);
      checkAroundCells(x - 1, y - 1);
      checkAroundCells(x - 1, y + 1);
    }
  }
}

function addFlag(event){
  if ((event.target.classList.contains('clear') || event.target.classList.contains('bomb')) && !event.target.classList.contains('near-bomb') && !event.target.classList.contains('empty')){
    event.target.classList.toggle('flag');
  }
  if (event.target.classList.contains('bomb')){
    findBombs++
  }
  if(event.target.classList.contains('bomb') && event.target.classList.contains('flag')){
    console.log('yes');
  }
  console.log(findBombs)
}