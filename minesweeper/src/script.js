import { createTable, addMines } from "./utils/createFiled.js";
import { createMatrix } from "./utils/createMatrix.js";

function removeContextMenu(){
  let elements = document.getElementsByTagName('td');
    for (let i = 0; i < elements.length; i++){
    console.log(elements[i])
    elements[i].oncontextmenu = null; 
  }
}

  createMatrix();
  createTable();

function startGame(){
  removeContextMenu();
  addMines();

}
startGame();