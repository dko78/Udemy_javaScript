"use strict";

function logger() {
  console.log("Zovem se Dalbor");
}

logger();
/*
function foodProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = foodProcessor(3, 5);

console.log(appleJuice);

console.log(`JA ti Imam ${calcAge1(1978)}  godina`);
//function declaration. Mozes pozvatiprije nego deklariraš, ove expression ne
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

//function expression
//annonymus fuction, annonymus
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1978);
console.log(age2);

//arrow function, nema function ključnu riječ u sebi

const calcAge3 = (birthYear) => 2023 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} ide u penziju ${retirement}`;
};

console.log(yearsUntilRetirement(1978, "Dalibor"));

console.log(yearsUntilRetirement(1986, "Emina"));

//calling 1 funkciju unutar 2.

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(3, 5));

*/

/*
const calcAgeX = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (godineZaPenziju, birthYear, firstName) {
  const retirement = godineZaPenziju - calcAgeX(birthYear);
  if (godineZaPenziju > calcAgeX(birthYear)) {
    return `${firstName} ide u penziju za ${retirement} godina.`;
  } else {
    return `${firstName} već je u penziji.`;
  }
};

console.log(yearsUntilRetirement(68, 1951, "Dalibor"));

*/

//challenge

/* Write your code below. Good luck! 🙂 */
/*
const calcAverage = (rez1, rez2, rez3) => ((rez1 + rez2 + rez3)/3);

const scoreDolphins = calcAverage(44,23,71);

const scoreKoalas = calcAverage(65,54,49);

function checkWinner(avgDolphins, avgKoalas)
{
    if (avgKoalas >= (2 * avgDolphins) )
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgDolphins >= (2 * avgKoalas) ) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else
    {console.log(`No team wins...`);
        
    }
  
}
 //ili
 const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//kraj ili

*/

//A R R E Y S
/*
const friends = ["Zoko", "Brale", "Bole"]; //literal syntax
console.log(friends);

const years = new Array(1991, 2001, 2023, 2024);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //zadnji;

friends[2] = "Siki";
console.log(friends);

// friends = ["Bob", "Njonjo"];
// console.log(friends);

const ja = ["Dalibor", "Kovačić", 2024 - 1978, "Programer", friends];

console.log(ja);

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1990, 1997, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);

console.log(age1);
console.log(age2);
console.log(age3);
console.log(age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(ages);


//add elements
const friends = ["Zoko", "Brale", "Bole"]; //literal syntax
const newLength = friends.push("Jay"); //ova fukcija push u stvari vraća npovi length

friends.unshift("John"); //na 0 mjesto stavlja

console.log(friends);

//remove elemets
friends.pop(); //miče zadnji element, vraća inače vrijednost tog kojeg miče

console.log(friends);

friends.shift(); //miče 0-lti elemet

console.log(friends);

console.log(friends.indexOf("Brale"));

console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends);

console.log(friends.includes(23)); //to je strict, dakle n emozeš u navodnike staviti, vraća boolean

if (friends.includes("Jole")) {
  console.log(`Imaš prijatelja Boleta`);
} else {
  console.log(`Imaš prijatelja Boleta`);
}


//code challenge


const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else if (billValue > 300) {
    return billValue * 0.2;
  } else {
    return billValue * 0.2;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

// O b j e c t s
//object literal concept
const ja = {
  firstName: "Dalibor",
  lastName: "Kovačić",
  birthYear: 1978,
  job: "Programer",
  friends: ["Bole", "Brale", "Žeko"],
  hasDriverLicence: true,
};

console.log(ja);
console.log(ja.lastName);
console.log(ja["lastName"]);
//exppresion u []
console.log(ja["lastName"]);

const nameKey = "Name";
console.log(ja["first" + nameKey]);
console.log(ja["last" + nameKey]);

const interestedIn = prompt(
  "Što želiš znati o meni (firstName, lastName, age, job, friends?"
);
//undefined - ako nema tog propertyja, ato je falsy vrijednost
if (ja[interestedIn]) {
  console.log(ja[interestedIn]);
} else {
  console.log("Nepoznata vrijednost");
}

ja.lokacija = "Hrvatska";
ja["mailAdresa"] = "kovacic.dalibor@gmail.com";
//console.log(ja);

console.log(
  `${ja.firstName} imam ${ja.friends.length} prijatelja, a najbolji prijatelj mi je ${ja.friends[0]}.`
);

const ja = {
  firstName: "Dalibor",
  lastName: "Kovačić",
  birthYear: 1978,
  job: "Programer",
  friends: ["Bole", "Brale", "Žeko"],
  hasDriverLicence: true,
  // calcAge: function (birthYear) {
  //   //property je fuction value
  //   //property of JA objekta
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} imam ${ja.calcAge()} godina, moje zanimanje je ${
      ja.job
    }. ${
      this.hasDriverLicence ? "Imam vozačku dozvolu" : "Nemam vozačku dozvolu"
    }`;
  },
};

//console.log(ja.calcAge()); //prvo ga tu izračunaš, ona možeš korisiti kao atribut

//console.log(ja.age);

//console.log(ja.calcAge(ja.birthYear));

//console.log(ja["calcAge"](1978));

//console.log(ja["lastName"]);

//zadatak

console.log(ja.getSummary());

//
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(john.calcBMI()); //prvo ga tu izračunaš, ona možeš korisiti kao atribut

console.log(john.bmi);

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fullName}' s BMI ${mark.bmi} je veće`);
} else {
  console.log(`${john.fullName}' s BMI ${john.bmi} je veće`);
}

*/
// l o o p s
//vrti se dok j e2. uvjet = TRUE
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

/*
const jaArray = [
  "Dalibor",
  "Kovačić",
  1978,
  "Programer",
  ["Bole", "Brale", "Žeko"],
  true,
];

const types = [];

for (let i = 0; i < jaArray.length; i++) {
  //reading
  console.log(jaArray[i], typeof jaArray[i]);
  //filling types of array
  //types[i] = typeof jaArray[i];
  types.push(typeof jaArray[i]);
}
console.log("----gore sam napunio array 'types' sad displejam--");
console.log(types);

const years = [1990, 1997, 2010, 2018];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log("----gore sam napunio array 'ages' sad displejam---");
console.log(ages);

//continue (exit iteration) and brake (exit loop)statement
console.log("-----------------------only strings---------------");
for (let i = 0; i < jaArray.length; i++) {
  if (typeof jaArray[i] !== "string") continue;
  console.log(jaArray[i], typeof jaArray[i]);
  //types.push(typeof jaArray[i]);
}

console.log("-----------------------only numbers---------------");
for (let i = 0; i < jaArray.length; i++) {
  if (typeof jaArray[i] !== "number") continue;
  console.log(jaArray[i], typeof jaArray[i]);
  //types.push(typeof jaArray[i]);
}

console.log("-----------------------BREAK only numbers---------------");
for (let i = 0; i < jaArray.length; i++) {
  if (typeof jaArray[i] === "number") break;
  console.log(jaArray[i], typeof jaArray[i]);
  //types.push(typeof jaArray[i]);
}



console.log("-----------------------vjezba loop----------------");

const osoba = [
  "Dalibor",
  "Kovačić",
  1978,
  "Programer",
  ["Bole", "Brale", "Žeko"],
  true,
];
//ctrl + D zamijeni sve označeno s nečim
for (let i = 0; i < osoba.length; i++) {
  //const element = array[i];
  console.log(osoba[i]);
}

//
console.log("-----------------------vjezba loop obrnuto-------");

console.log("Duljina polja: " + osoba.length);
for (let i = osoba.length - 1; i >= 0; i--) {
  //if (i > 100) break;

  console.log(i, osoba[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  //const element = array[exercise];
  console.log(`----------------------- V J E Z B A---${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Vježba ${exercise}---------DIŽEM UTEG---${rep}`);
  }
}


// While loop
console.log("-----------------------While loop-------          ");

// let i = 1;
// while (i <= 10) {
//   console.log(`Lifting weights repetition ${i}`);
//   i++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

//console.log(`VI ste ${dice}`);

while (dice !== 6) {
  console.log(`VI ste ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Uskoro gotov`);
}
*/

console.log("-----------------------task loops-----------------");

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
  //return Number((sum / arr.length).toFixed(2));//3.6666666666666665 je 3,67
};

console.log(calcAverage([2, 3, 6]));

console.log(calcAverage(tips));
