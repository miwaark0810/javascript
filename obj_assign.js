let pet = {
  type:"ハムスター",
  name:"キラ",
  description:{
    birth:"2014-02-15"
  }
};

let pet2 = {
  color:"白",
  name:"山田",
  description:{
    food:"ひまわりのタネ"
  }
};

let pet3 = {
  weight:42,
  photo:"http://www.wings.msn.to/imag/ham.jpg"
};

Object.assign(pet,pet2,pet3);
console.log(pet);