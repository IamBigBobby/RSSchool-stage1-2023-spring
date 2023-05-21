import { createTable, addMines } from "./utils/createFiled.js";
import { createMatrix } from "./utils/createMatrix.js";


  

function startGame(){
  createMatrix();
  createTable();
  addMines();
}
startGame();