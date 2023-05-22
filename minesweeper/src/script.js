import { createTable, addMines } from "./utils/createFiled.js";
import { choosenCountOfMines, choosenDifficulty, createMatrix, turnOnTimer, } from "./utils/createMatrix.js";


export function startGame(){

  createMatrix();
  createTable();
  addMines();
  turnOnTimer();
  choosenDifficulty();
  choosenCountOfMines();

}
startGame();




