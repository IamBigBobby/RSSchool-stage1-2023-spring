import { createTable, addMines } from "./utils/createFiled.js";
import { createMatrix } from "./utils/createMatrix.js";
import { timer } from "./utils/timer.js";


  

function startGame(){
  createMatrix();
  createTable();
  addMines();
  timer();
}
startGame();