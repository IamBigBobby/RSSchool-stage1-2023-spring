import { createTable, addMines } from "./utils/createFiled.js";
import { choosenDifficulty, createMatrix, mineFiledArr, } from "./utils/createMatrix.js";


export function startGame(){

  createMatrix();
  createTable();
  addMines();
  mineFiledArr = [];
  choosenDifficulty();
}
startGame();




