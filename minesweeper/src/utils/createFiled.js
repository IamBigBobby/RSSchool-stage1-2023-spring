export function createField(){
  let mineFiled = [];

  for (let i = 0; i < 10; i++){
    mineFiled[i] = Math.round(Math.random() * 99999999).toString(2).slice(1,11).split('');
  }
  
  console.log(mineFiled);
}