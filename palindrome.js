let str="abab";
let bag="";
for(let i=0;i<str.length;i++){
  bag=bag+str[i];
}
if(str===bag){
  console.log("String is palindrome");
}
else{
  console.log("String is not palindrome");
}