let sum=0
average=0
count=0
let a=[1,7,5,32,8,90,3,32];
for(i=0;i<=a.length;i++){
  if(a[i]%2===0){
    sum+=a[i];
    count++;
  }
}
console.log(sum/count)