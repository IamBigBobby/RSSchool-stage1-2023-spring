export let mineFiledArr = [];
let countBomb = 10;

export function createMatrix (){


  // for(var i = 0; i < 10; i++){
  // mineFiledArr[i] = Math.round(Math.random() * 50 + 30).toString(2)
  // }

  // console.log(mineFiledArr)
  for (let i = 0; i < 100; i++){
    mineFiledArr[i] = 0;
  }

  for (let i = 0; i < countBomb; i++){
    let randomNumberArr = Math.floor(Math.random() * mineFiledArr.length);
    mineFiledArr.splice(randomNumberArr, 1, 1);
  }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  let twoDimensionalArr = chunkArr(mineFiledArr, 10);

  console.log(twoDimensionalArr);
}