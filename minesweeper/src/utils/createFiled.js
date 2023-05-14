export function createTable(){
  let minesweeperProject = document.querySelector('.minesweeper-project');
  minesweeperProject.innerHTML = '';
  let minesweeperTable = `<table class="mine-field"></table>`;

  minesweeperProject.insertAdjacentHTML('afterbegin', minesweeperTable);
}

export function createNodes (){

}