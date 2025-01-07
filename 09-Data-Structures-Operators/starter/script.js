'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0, //default values
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[mainIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Eto ti paste sa ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

const arr = [2, 3, 4, 12, 17];

const [x, y, z, r] = arr;

console.log(x, y, z, r);

let [prvi, , treci] = arr;

console.log(prvi, treci);

[treci, prvi] = [prvi, treci];

console.log(prvi, treci);

const [starter, main] = restaurant.order(2, 0);

console.log(starter, main);

//practice assignments
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const [firstBook, secondBook] = books;

console.log(firstBook, secondBook);

//treća knjiga

const [, , thirdBook] = books;
console.log(thirdBook);

//dest. polje unutar polja
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratinCounts]] = ratings;

console.log('rating:' + rating + ' count: ' + ratinCounts); //altgr + 7 backtick

//zadatak
const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

//destracturing objects
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const { menu = [], starterMenu: starters = [] } = restaurant; //dajemo defoutlete vrijednosti ako nema u objektu

//mutating variables
let a = 111;
let b = 333;

const obj = {
  a: 23,
  b: 7,
  c: 17,
};
//moras u zagrede staviti!
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;

//console.log(fri);
console.log(o, c);
restaurant.orderDelivery({
  time: '22:40',
  address: 'Vrlika 71, Daruvar',
  mainIndex: 2,
  starterIndex: 1,
});

//spread operator, ono što bi inače zaarezom odvajali

const arr1 = [7, 8, 9];

const newArr1 = [1, 2, ...arr1];

console.log(newArr1);

console.log(...newArr1);

const newMenu = [...restaurant.mainMenu, 'Sarma'];

console.log(newMenu);
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more array together
const menuX = [...restaurant.starterMenu, ...restaurant.mainMenu];

//iterables : array, strings, maps, setts NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//multiple values sep. by comma samo kdo poziva funckija ili novi array
//real world example
/*
const ingrediants = [
  prompt("Let's make pasta! Indegriedient 1?"),
  prompt('Ingrediant2?'),
  prompt('Ingrediant3?'),
];

console.log(ingrediants);

restaurant.orderPasta(...ingrediants);//kao da si stavio indgrediants[0], indgrediants[1],indgrediants[2]
*/
//new resturan object test
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Đuro' };

console.log(newResturant);

const resturantCopy = { ...restaurant };
resturantCopy.name = 'Little Italy';

console.log(resturantCopy.name);
console.log(restaurant.name);
//spread - unpack array ...
//rest pack into arras
//1) desctructuring
//spread,beacuse on RIGHT side of =
//koristiš gdje bi vrijednosti odvojio sa zarezom
const arr11 = [1, 2, ...[3, 4]]; //1,2,[3,4]

//rest operator becaouse LEFT of =
//uzima više vrijednosti i pakira ih u 1 array, suprotno od spread
//koristiš tamo gdje bi imena varijabli odvojio zareziom---ne VRIJEDNOSTI
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...OtherFood] = [
  ...resturantCopy.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, OtherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
//uzima subotu i ostale dane
console.log(weekdays);

//2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x1 = [13, 5, 7];
add(...x1); //spreading
//a onda ga funkcija sa upakira u polje gore function(...numbers)

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spimach');

// falsy values: false, '', 0 , null, undefined,
//------short circuiting OR || , PRVA TRUTHY VALUE, ili zadnja ako je sve falsy
//ako je prva falsy vraća drugu!!! ako je prva falsy nastavlja
const guestN1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guestN2 = restaurant.numGuests || 10;

console.log('--------AND-------------');
// short circuing AND &&, prva falsy vrijednost vraća...ili zadnju ako su sve thruly
//nastvalja ako je prvo thruthy
//ako je prva thruty vraća drugu!!! ako je prva thruthy nastavlja
console.log(0 && 'Ja'); //vraća 0
console.log(1 && 'Ja'); //vraća ja
//ako postoji metohda orderPizza onda ćeš ju pozvati
restaurant.orderPizza && restaurant.orderPizza('salama', 'gljive');

//nullish coalesing ??
// nullish = null, undefined
restaurant.numGuests = 0;
const guestsN3 = restaurant.numGuests || 10; //vraća 10 jer je 0 falsy

const guestCorrect = restaurant.numGuests ?? 10; //vraća 0, nullish values null, undefined

//logical assingment
const rest1 = {
  name: 'LItally',
  //numGuests: 0, 0j e flasy pazi || jer će ti vratit dolje 10
  numGuests: 20,
};

const rest2 = {
  name: 'Piccolo',
  owner: 'Dalibor',
};

//defautlno broj gostiju

rest1.numGuests = rest1.numGuests || 10; //ako je prva vrijednost thruthy vraća ju, ni ne gleda dalje, ako ne slijedeća
rest2.numGuests = rest2.numGuests || 10;
// OR assigment operator - daje vrijednost varijablu ako je trenutno falsy vrijednost varijable
rest1.numGuests ||= 10;

//ali bolje sa nullish jer ako daš 0 neće biti dobro

//nullish (null or undefined)
rest1.numGuests ??= 10; //isto što i ovo rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ??= 10; //ako je vrijesnost nullish dodjeliti će varijabli vrijensost

//AND assignment operator
//ako postoji owner zelimo ju zamijeniti sa anonymous
//assign valu if is trhruthy
rest1.owner = rest1.owner && '<ANONyMOUS>'; //ako je prva falsy vraća tu vrijednost
//ako je vrijedsnot thruthy vraća drugu vrijendnost
//konkretno prva vrijednost je thruthy pa vraća drugu

//asajna vrijednost varijabli akoje thruthy
//ako npr zeliš dodijeliti vrijesnost varijabli koje je već definirana
rest1.owner &&= '<ANONyMOUS>';
rest2.owner &&= '<ANONyMOUS>';

//for loop

const menux = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for of loop
for (const item of menux) console.log(item);
//sa indexima
for (const [i, el] of menux.entries()) {
  //destrukturiraš jer je entries array
  console.log(`${i + 1} : ${el}`);
}

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//optional chaining
console.log(restaurant.openingHours.mon?.open); //ako mon postoji onda će pročitati open property, inače undefined

console.log(restaurant.openingHours?.mon?.open); //ako openingHours propertx ne posoji ne ide dalje, inače undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //ako zeliš koristiti variable name kao property name onda []
  console.log(`On ${day}, we  open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Dalibor', email: 'dd@gdgf.hr' }];

console.log(users[0]?.name ?? 'User array empty');

//looping over objects whitch is not iterrables, we loop thrue keys

const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

console.log(openStr);

//property values

const values = Object.values(openingHours);
console.log(values);

//entries object keys + values, niej isto kao Array
const entries = Object.entries(openingHours);
//console.log(enties);
//jesnostvnij primejr je sert [key, value], ali tu je value opet objekt pa zato tako
for (const [key, { open, close }] of entries) {
  // u biti destrukturiraš key i values,a values je objekt koji sadrzi open i close
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
