export function createMatrix (){
  let mineFiledArr = [];

  for (let i = 0; i < 10; i++){
    mineFiledArr[i] = Math.round(Math.random() * 99999999).toString(2).slice(1,11).split('');
  }
  
  console.log(mineFiledArr);
}