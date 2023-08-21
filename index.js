const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);


// create rows
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.id = 'row';
  container.appendChild(row);

  //create columns and append them to the row
  for (let i = 0; i < 16; i++) {
    const col = document.createElement('div');
    col.id = 'col';
    row.appendChild(col);
  }
}