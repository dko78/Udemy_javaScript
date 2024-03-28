'use strict';
//https://github.com/jonasschmedtmann/complete-javascript-course

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
  //const firstName = 'Emina'; ako nazovešisto uzeti će ovu iz funckijene globals scop-a
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
