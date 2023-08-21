const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// create rows
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);

  //create columns and append them to the row
  for (let j = 0; j < 16; j++) {
    var col = document.createElement('div');
    col.className = 'col';
    row.appendChild(col);

    // using IIFE to add hover effect to each column immediately
    (function (column) {
      col.addEventListener('mouseover', () => {
        column.style.backgroundColor = 'red';
      });

      col.addEventListener('mouseout', () => {
        column.style.backgroundColor = '';
      });
    })
    (col);
  }
}
