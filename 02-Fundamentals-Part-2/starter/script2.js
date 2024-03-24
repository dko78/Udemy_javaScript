"use strict";
/* moje vjezbe za fundametals 2 */
const nowYear = 2024;

const ja = {
  firstName: "Dalibor",
  lastName: "Kovačić",
  birthYear: 1978,
  job: "Programer",
  friends: ["Bole", "Brale", "Žeko"],
  hasDriverLicence: true,
  weight: 88,
  height: 1.78,
  calcAge: function () {
    //calcAge - metoda
    this.age = nowYear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} imam ${this.calcAge()} godina. Zanimanje mi je ${
      this.job
    } i ${this.hasDriverLicence ? "imam" : "nemam"} vozačku dozvolu}`;
  },
  getBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi; //stvori proerti od objekta bmi koji mozes posliej koristiti
  },
};
console.log(ja.calcAge());
console.log(ja.age); //akoovo prvo pozoveš ništa moraš prvo clac age

//ako prvo pozoveš ništa
console.log(ja.bmi);
console.log(ja.getBMI());
console.log(ja.bmi);

console.log(ja.getSummary());

console.log(ja);
console.log(ja.lastName);
console.log(ja["lastName"]);

ja.lokacija = "Hrvatska";
console.log(ja);

ja["email"] = "kovacic.dalibor@gmail.com";

console.log(ja);
console.log(ja.calcAge());

//nizovi

const years = [1990, 1997, 2010, 2018];

const ages = [];

for (let i = 1; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

//moja vjezba object scope

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// old method
const another = {};

for (let key in circle) {
  another[key] = circle[key]; //another["radius"] = circle["radius"]
}

console.log(another);

const another2 = Object.assign({}, circle);

console.log(another2);

const another3 = Object.assign(
  {
    color: "yellow",
  },
  circle
);

console.log(another3);

//zađu još bolejje spred object ...

const another4 = { ...circle };
console.log(another4);

//this keyword
//ako je funcija dio objeta onda se zove metoda, onda this = object
//ako funkcija neije dio objekta onda this =>global object (window) i global in NODE

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play();
video.stop();

const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); //ovaj this je od showTags onda mozes dohvatiti title
  },
};

video2.showTags();

const video3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function (year) {
    return 2024 - year;
  },
};

console.log(video3.showTags(1978));
