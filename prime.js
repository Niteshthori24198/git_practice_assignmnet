let num=11;
let flag=0;
for(let i=2;i<=num;i++){
  if(num%i===0){
    flag++
  }
}
if(flag==1){
  console.log("Number is prime !");
}
else{
  console.log("Number is not prime  !");
}