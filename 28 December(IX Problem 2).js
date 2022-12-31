function countCharacters(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    const s = a[i];
    let length = 0;
    for (let j = 0; j < s.length; j++) {
      length++;
    }
    total = total+length;
  }
  return total;
}

console.log(countCharacters(["H", "J", "K", "L", "M"]));  

