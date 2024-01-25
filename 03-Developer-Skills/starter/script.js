// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const maxTemps = function (arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    //console.log(typeof arr[i]);
    if (arr[i] > maxValue && typeof arr[i] === 'number') {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

const minTemps = function (arr) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue && typeof arr[i] === 'number') {
      minValue = arr[i];
    }
  }
  return minValue;
};

console.log(maxTemps(temperatures));

console.log(minTemps(temperatures));

console.log(minTemps(temperatures) + maxTemps(temperatures));

//drugi način

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`Max je ${max}, min je ${min}.`);
  return max - min;
};

const amplituede = calcTempAmplitude(temperatures);

console.log('ispis amplitude: ' + amplituede);

//obrnuti redolijed

const polje1 = [1, 7, 12, 5, 6];
//debugger;//pokrene kao break point u debugeru
let polje2 = [];
const reverseArray = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    polje2.push(arr[i]);
  }
  return polje2;
};

console.log(reverseArray(polje1));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  //bug
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//zadatak
let temp = [3, 6, 12, 5];

let arrForecast = [];

const printForecast = function (arr, typeOut) {
  const numElements = arr.length;
  let myStr = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arrForecast.push(`...${arr[i]} in ${i + 1} days`);
    myStr += `...${arr[i]} in ${i + 1} days`;
  }
  //return arrForecast;
  if (typeOut === 1) {
    return arrForecast;
  } else return myStr;
};
let result = printForecast(temp, 1);

console.log(result);
