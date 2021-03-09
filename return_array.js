function getMaxMin(...nums){
  return [Math.max(...nums),Math.min(...nums)];
}

let result = getMaxMin(10,5,62,41,7);
console.log(result);

let [max,min] = getMaxMin(10,652,3,72);
console.log(max);
console.log(min);