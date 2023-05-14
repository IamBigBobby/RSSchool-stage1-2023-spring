export function createTable(){
  let minesweeperProject = document.querySelector('.minesweeper-project');
  minesweeperProject.innerHTML = '';
  let minesweeperTable = `<table class="mine-field"></table>`;

  minesweeperProject.insertAdjacentHTML('afterbegin', minesweeperTable);

  for (let y = 0; y < 10; y++){
    let tr = document.createElement('tr');
    document.querySelector('.mine-field').appendChild(tr);

    for (let x = 0; x < 10; x++){
      let td = document.createElement('td');
      tr.appendChild(td);
    }

  }
}
