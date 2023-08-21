function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
    const col = document.createElement('div');
    col.className = 'col';
    row.appendChild(col);

    // using IIFE to add hover effect to each column immediately
    (function (column) {
      col.addEventListener('mouseover', () => {
        const color = randomColor();
        column.style.backgroundColor = color;
      });

      col.addEventListener('mouseout', () => {
        column.style.backgroundColor = '';
      });
    })
    (col);
  }
}
