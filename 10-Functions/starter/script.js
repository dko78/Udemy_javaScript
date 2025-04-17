'use strict';
const bookings = [];
//first class fuction: fukcija kao tip objekta, --all fuctions are values
//Higher-Order Functions
//1) a function that receives another function as an argument(onda ju zovemo call back      function),
//2)  that returns a new fuction or both
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers //moze i dinamički na osnovu drugih parametara, ali numPassangers mora biti prij
) {
  //ES5

  //numPassengers = numPassengers || 1; //short circuing, kad je prva vrijednost undefined razultat je ovo drugo
  //price = price || 199;

  const booking = { flightNum, numPassengers, price }; //booking je array,  a sastoji se od objekta

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000);

//proimitives and objects

const flight = 'LH123';
const ja = {
  name: 'Dalibor Kovačić',
  passport: 511541541541,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999'; //flightNum je proimitivni type, samo kopija se proslijeđuje kopija flightNum = flight
  passanger.name = 'Mr. ' + passanger.name; //object ide kao ref. type na memory heap...obje varijable prikazuju istu mem. lokaciju

  if (passanger.passport === 511541541541) {
    alert('Check IN');
  } else {
    alert('Wrong pass');
  }
};
//checkIn(flight, ja);
//console.log(flight);
//console.log(ja);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(ja);
checkIn(flight, ja);

//!!! JS nema passing by reference, samo pass by value. Ima passing value as memory address, to the reference, not by the reference

//First class function
//!!! to znači function as values. Functions are just type of objects
//const add = (a + b) => a + b
const counter = {
  value: 25,
  increm: function () {
    //function as value
    this.value++;
  },
};
console.log(counter);

//pas  fucntions as arguments
const greet = () => console.log('Hey Dalibor');
//btnClose.addEventListner('click', greet)
//functions su objekti

//higher order kad fukcija addEventListner  zove greet

//function that returns new function
/*
   function count(){--higher order function
     let counter = 0;
     return function(){--return function
      counter++;}
   }
*/

//kad fukcija prima drugu funkciju kao objekt

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //regular expression koji miče sve SPACES u stringu i zamijeni iz sa praznim
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str} `);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); //!!!pazi ne zoveš ju
transformer('JavaScript is the best!', oneWord); //!!!pazi ne zoveš ju

const daj5 = function () {
  console.log('🚗');
};

//JS uses callback all the time
document.body.addEventListener('click', daj5);

//['Da', 'NE', 'MOŽDA'].forEach(daj5);

//a sada suprotno

const greet1 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet1('Hey'); //value is this fuction

greeterHey('Pero');

greeterHey('Đuro');

//challenge
const greetA = greeting => name => console.log(`${greeting} ${name}`);

greetA('Hi')('Dalibor');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: fuction(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    //add to array
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dalibor Kovačić');
lufthansa.book(854, 'Jajo jajić');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //in strict mode this keyword point out to undefined
