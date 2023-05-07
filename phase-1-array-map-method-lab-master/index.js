const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCase(arr) {
//   const words = arr.map(item => item.split(' '));
//   return words.map(word => {
//     return word.map(element => {
//         return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//       }).join(' ');

//   });

// }

// console.log(titleCase(tutorials));

const titleCased = () => {
  const arraycapitalizer = tutorials.map(function(words){
  const word = words.split(" ")
  const capitalWord = word.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
  return capitalWord.join(" ")
})
return arraycapitalizer
}

console.log(titleCased(tutorials))




// const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
// const rollCall = [];
// for (const student of skiSchool) {
//   rollCall.push(student + " the skier");
// }
// console.log(rollCall)
// const flatSchool =[ "kishi", "salah", "hiba"];
// const updatearr=[];
// for ( const student of flatSchool){
//   updatearr.push(student +" the trainer")
// }
// console.log(updatearr);


// const flatSchool =[ "kishi", "salah", "hiba"];
// const rollCall = flatSchool.map(function(trainer){
//   return trainer + " the trainer";

// });
// console.log(rollCall)
// const flatSchool =[ "kishi", "salah", "hiba"];
// const rollCall = flatSchool.map((trainer)=> trainer + " the trainer");
// console.log(rollCall)


// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];
// const activatedRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });

// console.log(activatedRobots);