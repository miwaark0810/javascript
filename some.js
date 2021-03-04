var data = [4,7,16,35];
var result = data.some(function(value,index,array){
  return value % 3 === 0;
})

if(result){
  console.log("3の倍数あり");
}else{
  console.log("3の倍数なし");
}