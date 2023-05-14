export let mineFiledArr = [];

export function createMatrix (){

  for (let i = 0; i < 10; i++){
    mineFiledArr[i] = Math.round(Math.random()).toString(2).slice(1,11);
  }
  console.log(mineFiledArr)
}