
import { countBomb, mineFiledArr, sideSize } from "./createMatrix.js";
import { clickButton } from "./gameLogic.js";

export let mineField;

export function createTable(){

  let minesweeperProject = document.querySelector('.minesweeper-project');
  minesweeperProject.innerHTML = '';

  let tableInformationTag = `<div class="table-information"></div>`
  let minesweeperTableTag = `<table class="mine-field"></table>`;

  minesweeperProject.insertAdjacentHTML('afterbegin', minesweeperTableTag);
  minesweeperProject.insertAdjacentHTML('beforeend', tableInformationTag);
  
  
  let tableInformation = document.querySelector('.table-information');
  tableInformation.innerHTML = ''

  let clockTag = 
  `<div class="clock">
    <p>Время, сек</p>
    <input class="timer" value="0">
  </div>`;

  let numberOfMovesTag = 
  `<div class="move-table">
    <p>Количество ходов</p>
    <input class="moves" value="0">
  </div>`;

  let bombCounterTag = 
  `<div class="move-table">
    <p>Количество бомб на поле</p>
    <input class="bomb-counter" value="${countBomb}">
  </div>`;

  let difficultyLevelsTag = 
  `<div class="difficulty-levels">
    <button class="button easy">Easy</button>
    <button class="button normal">Normal</button>
    <button class="button hard">Hard</button>
  </div>`

 



  tableInformation.insertAdjacentHTML('afterbegin', clockTag);
  tableInformation.insertAdjacentHTML('afterbegin', numberOfMovesTag);
  tableInformation.insertAdjacentHTML('afterbegin', bombCounterTag);
  tableInformation.insertAdjacentHTML('afterend', difficultyLevelsTag);
  // tableInformation.insertAdjacentElement('afterend', slider)
  
  let difficultyLevels = document.querySelector('.difficulty-levels');
  difficultyLevels.innerHTML = 
  `<div class="difficulty-levels">
    <button class="button easy">Easy</button>
    <button class="button normal">Normal</button>
    <button class="button hard">Hard</button>
  </div>`;

  let inputCountTag = 
  `<div class="input-count">
    <p>Количестов бомб 1-99</p>
    <input class="input-count-value" value="${countBomb}" min="1" max="99">
  </div>`;

  difficultyLevels.insertAdjacentHTML('afterend', inputCountTag)





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
