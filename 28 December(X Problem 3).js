const size = 5; 

for (let row = 0; row < size; row++) {
  let box = ''; 

  for (let col = 0; col < size; col++) {
    if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
      box += '*'; 
    } else {
      box += ' '; 
    }
  }

  console.log(box); 
}