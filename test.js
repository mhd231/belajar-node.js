const coba = {
  name: "Mahmud",
  age: 17,
  greet() {
    console.log("nama saya " + this.name);
  }
};

const printName = (coba) => {
  console.log(coba.name);
}

printName(coba);

const {name, age} = coba;
console.log(name, age);

//const Copiedcoba = {...coba};
//console.log(Copiedcoba);


const kesukaan = ['olahraga', 'membaca'];
const [hobi1, hobi2] = kesukaan;
console.log(hobi1, hobi2);
//for(let hobi of kesukaan) {
  //console.log(hobi);
//};
//console.log(kesukaan.map(hobi => "Hobi = " + hobi));
//console.log(kesukaan);

//const Copiedkesukaan = [...kesukaan];
//console.log(kesukaan);

//const toArray = (...args) => {
  //return args;
//}

//console.log(toArray(1,2,3,4,5));