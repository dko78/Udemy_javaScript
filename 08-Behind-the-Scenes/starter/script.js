'use strict';
//https://github.com/jonasschmedtmann/complete-javascript-course
/*
const myName1 = 'Dalibor';

function first1() {
  const age = 45;

  if (age >= 30) {
    //nemaš pristup  job varijabli definiranom dolje
    //pravilo uvijekide prema gore,
    //ovaj blok je blizanac sa fuckijom second, inema pristupa varijablama u second(), niti second() ima prtistup blok variajblama if.a
    const decade = 3;
    var millenial = true;
  }

  function second2() {
    const job = 'teacher';
    console.log(`${myName1} is a ${age}-old ${job} `); //ima pristup
    //console.log(`decade varijabla je: ${decade}`); ovo ne radi,nema pristup const,let varijablama iz gornjeg bloka
    console.log(`millenial varijabla je: ${millenial}`); //ovo radi jer var nije block scope
  }

  second2();
}

first1();

//                                  scoping in practice
//global scope funckija
function calcAge(birthYear) {
  //const firstName = 'Emina'; ako nazovešisto uzeti æe ovu iz funckijene globals scop-a
  console.log(firstName);
  const age = 2024 - birthYear;
  //console.log(firstName); //first name nije definirana u funciji, alije def. na global scopu
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`; //ovaj parametar funcije birthYear kod funkcija je kao varijabla
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Dalibor';
calcAge(1978);

// HOISTING

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Dalibor';
let job = 'Informatičar';
//const year = 1991;
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

//function declaration

function addDecl(a, b) {
  return a + b;
}

//function expr.

const addExpr = function (a, b) {
  return a + b;
};
//arrow function
const addArrow = (a, b) => a + b;

//example
console.log('numProducts je:', numProducts);
if (!numProducts) {
  deleteShoppingChart();
}

var numProducts = 10;

function deleteShoppingChart() {
  console.log('All products deleted!');
}

//this keyword is not static, zavisi kako je funckija pozvana i vrijednost je poznata tek kad se pozove
//arrow function nemaju this
/*
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge1(1978);

const jonas = {
  year: 1978,
  calcAge: function () {
    console.log(this); //to je ustvari jonas objekt
    console.log(2024 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borowing -to niej poziv!
matilda.calcAge(); //bitno je da razumiješ da se this odnosi na onu metodu s koje je pozoveš ne u kojoj je definirana. to nije static metoda

const f = jonas.calcAge; //met
f(); //ovi ce biti undefined jer nema objekta na kojem se nalazi,ovo je samo funckija
*/

const jonas = {
  firstName: 'Jonas',
  year: 1978,
  calcAge: function () {
    //console.log(this); //to je ustvari jonas objekt
    console.log(2024 - this.year);

    const self = this; //self or that

    //solution 1
    /*
    const isMillenial = function () {
      //regulaan funcija dohvaća vlastiti this, ne od objekta
      console.log(self);
      //  console.log(this.year >= 1991 && this.year <= 1996);
      console.log(self.year >= 1991 && self.year <= 1996);
    };
    
      */
    //solution 2 (arrow funcija nema svoju nego gleda od roditelja)
    //arrow nem svoj this, nego uvijek dohvaća os svog roditelja
    const isMillenial = () => {
      console.log(this);
      //  console.log(this.year >= 1991 && this.year <= 1996);
      console.log(this.year >= 1991 && this.year <= 1996);
    };

    isMillenial(); //ovo je undefined jer kao da je poziv izvan objekta, a tada je ako se zove izvan objekta this undefinedd
  },
  greet: () => console.log(`Hej ${this.firstName}`), //preporuka je NE KORISTI ARROW funckija kaomethod. arrow funckija nema this, nego gleda od roditelja, što je ovdje global scope a tu nema firstName
};

jonas.greet(); //pozvano je sa global, pa će tu gledati this
console.log(this.firstName);

jonas.calcAge();

// JS ENGINE : CALL STACK AND HEAP.
// OBJECTS suspremljeni u HEAP

//primitive types

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('prije', jessica);
console.log('poslije', marriedJessica);

//                  copy
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //stvori novi objekt sa vrijednostima, ali samo shalow copy,jer ako ima property na 2 razini onda ne kpira dobro

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('prije', jessica2);
console.log('poslije', jessicaCopy);

//deep clone
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  family: ['Alice', 'Bob'],
};

const jessicaCopy3 = structuredClone(jessica3);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('prije 3', jessica3);
console.log('poslije 3', jessicaCopy3);
