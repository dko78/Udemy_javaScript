'use strict';
//https://github.com/jonasschmedtmann/complete-javascript-course

const myName = 'Dalibor';

function first() {
  const age = 45;

  if (age >= 30) {
    //nemaš pristup  job varijabli definiranom dolje
    //pravilo uvijekide prema gore,
    //ovaj blok je blizanac sa fuckijom second, inema pristupa varijablama u second(), niti second() ima prtistup blok variajblama if.a
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age}-old ${job} `); //ima pristup
    //console.log(`decade varijabla je: ${decade}`); ovo ne radi,nema pristup const,let varijablama iz gornjeg bloka
    console.log(`millenial varijabla je: ${millenial}`); //ovo radi jer var nije block scope
  }

  second();
}

first();
