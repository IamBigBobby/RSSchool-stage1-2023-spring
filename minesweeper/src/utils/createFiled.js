import { sideSize } from "../script.js";
import { mineFiledArr } from "./createMatrix.js";
import { clickButton } from "./gameLogic.js";

export let mineField;

export function createTable(){

  let minesweeperProject = document.querySelector('.minesweeper-project');
  minesweeperProject.innerHTML = '';

  let tableInformationTag = `<div class="table-information"></div>`
  
  let minesweeperTable = `<table class="mine-field"></table>`;

  minesweeperProject.insertAdjacentHTML('afterbegin', minesweeperTable);
  minesweeperProject.insertAdjacentHTML('beforeend', tableInformationTag);

  
  
  let tableInformation = document.querySelector('.table-information');
  tableInformation.innerHTML = ''

  let clock = 
  `<div class="clock">
    <p>Время, сек</p>
    <input class="timer" value="0">
  </div>`;

  let numberOfMoves = 
  `<div class="move-table">
    <p>Количество ходов</p>
    <input class="moves" value="0">
  </div>`;

  let difficultyLevels = 
  `<div class="difficulty-levels">
    <button class="button easy">Easy</button>
    <button class="button normal">Normal</button>
    <button class="button hard">Hard</button>
  </div>`



  tableInformation.insertAdjacentHTML('afterbegin', clock);
  tableInformation.insertAdjacentHTML('afterbegin', numberOfMoves)
  tableInformation.insertAdjacentHTML('afterend', difficultyLevels)




  for (let y = 0; y < sideSize; y++){
    let tr = document.createElement('tr');
    document.querySelector('.mine-field').appendChild(tr);

    for (let x = 0; x < sideSize; x++){
      let td = document.createElement('td');
      td.x = x;
      td.y = y;
      td.addEventListener('mousedown', clickButton);
      tr.appendChild(td);
    }
  }
  mineField = document.querySelector('.mine-field');
}

export function addMines(){

  let tds = document.querySelector('.mine-field').getElementsByTagName('td');
  for (let i = 0; i < sideSize ** 2; i++){
    if (mineFiledArr[i] == 1){
      tds[i].classList.add('bomb');
    }
    else{
      tds[i].classList.add('clear');
    }
  }
}
