let string="hello"
  let charCount=[];

  for (let character of string) {
    if (!charCount[character]) {
      charCount[character]=1;
    }
    else {
      charCount[character]++;
    }
  }

  for (let character in charCount) {
    console.log(character, ":", charCount[character]);
  }


