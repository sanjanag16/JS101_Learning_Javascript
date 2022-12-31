  let result=[];
  let arr=[1,4,4,5,6,7,7,8]

  for (let i=0;i<arr.length;i++) {
    if (arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

console.log(result)