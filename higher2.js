function arrayWalk(data,f){
  for(var key in data){
    f(data[key],key);
  }
}

var result = 0;
function showElement(value,key){
  result += value;
}

var ary = [1,2,4,8,16]
arrayWalk(ary,showElement)

console.log(result);