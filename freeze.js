"use strict";

var pet = {type:"ハムスター",name:"クラ"}

Object.freeze(pet);

pet.name = "山田きら";
delete pet.type;
pet.weight = 42;