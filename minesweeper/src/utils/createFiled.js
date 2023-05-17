import { mineFiledArr } from "./createMatrix.js";
import { checkField } from "./gameLogic.js";

export let generateTable;
export let generateCell;

export function createTable(){

  let minesweeperProject = document.querySelector('.minesweeper-project');
  minesweeperProject.innerHTML = '';
  let minesweeperTable = `<table class="mine-field"></table>`;

  minesweeperProject.insertAdjacentHTML('afterbegin', minesweeperTable);

  for (let y = 0; y < 10; y++){
    let tr = document.createElement('tr');
    document.querySelector('.mine-field').appendChild(tr);

    for (let x = 0; x < 10; x++){
      let td = document.createElement('td');
      tr.appendChild(td);
      td.addEventListener('click', checkField)
    }
  }
  generateTable = document.querySelector('.mine-field')
  generateCell = document.getElementsByTagName('td');
}

export function addMines(){

  let tds = document.querySelector('.mine-field').getElementsByTagName('td');
  for (let i = 0; i < 100; i++){
    if (mineFiledArr[i] == 1){
      tds[i].classList.add('bomb');
    }
    else{
      tds[i].classList.add('clear');
    }
  }
}
