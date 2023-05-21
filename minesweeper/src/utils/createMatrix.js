import { countBomb, sideSize } from "../script.js";

export let mineFiledArr = [];
export let twoDimensionalArr;


export function createMatrix (){

  for (let i = 0; i < sideSize ** 2; i++){
    mineFiledArr[i] = 0;
  }

  let numberArr = [];
  
  for (let i = 0; i < mineFiledArr.length; i++){
    numberArr.push(i);
  }

  let randomNumberArr = [];

  for (let i = 0; i < countBomb; i++){
    let randomNumber = Math.floor(Math.random() * (numberArr.length));
    randomNumberArr.push(numberArr[randomNumber])
    numberArr.splice(randomNumber, 1);
  }


  for (let i = 0; i < countBomb; i++){
    mineFiledArr.splice(randomNumberArr[i], 1, 1);
  }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  twoDimensionalArr = chunkArr(mineFiledArr, sideSize);
}