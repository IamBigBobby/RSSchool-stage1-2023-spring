import { createTable, addMines } from "./utils/createFiled.js";
import { createMatrix } from "./utils/createMatrix.js";
import { checkField } from "./utils/gameLogic.js";


function startGame(){
  createMatrix();
  createTable();
  addMines();
  checkField();
}
startGame();