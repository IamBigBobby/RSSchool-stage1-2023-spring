import { createTable, addMines } from "./utils/createFiled.js";
import { choosenDifficulty, createMatrix, mineFiledArr, turnOnTimer, } from "./utils/createMatrix.js";


export function startGame(){

  createMatrix();
  createTable();
  addMines();
  turnOnTimer();
  choosenDifficulty();

}
startGame();




