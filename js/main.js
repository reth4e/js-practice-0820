//問題1.
const array = [2, 4, 7, 5, 4, 3, 8];

const newArray = array.filter(function (item, i) {
  return array.indexOf(item) === i;
});

console.log(newArray);


//問題2.
function leapyear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `${year}年はうるう年です`;
  }
  else if (year % 400 === 0) {
    return `${year}年はうるう年です`;
  }
  else {
    return `${year}年はうるう年ではありません`;
  }
}

console.log(leapyear(2020));
console.log(leapyear(2021));
