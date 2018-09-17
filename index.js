// Temporary practice coding here...

// // This will log 4 or 5 depending on both console.logs.
// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   };
//   console.log(i);
// }
// //console.log(i)
// sayHello();


// // ES5 old regular style function
// const multiplyES5 = function (x, y) {
//   return x * y;
// };
// console.log(multiplyES5(2, 3));


// //Arrow function in ES6. Curlys aren't required if just one expression
// const addES6 = (x, y) => {
//   return x + y;
// };
// console.log(addES6(3, 4));

// // Or without curlys
// const multiplyES6 = (x, y) => x * y;
// console.log(multiplyES6(2, 4));


// // ES5 phrase splitter
// var phraseSplitterES5 = function phraseSplitter(phrase) {
//   return phrase.split(' ');
// };
// console.log(phraseSplitterES5('split this phrase up'))
// console.log(phraseSplitterES5('split this phrase up')[0])

// // Alt ES5 way to split
// function phraseSplitter(phrase) {
//   var phrase = phrase.split(' ')
//   console.log(phrase)
// }
// phraseSplitter('rip up this phrase');

// // ES6 phrase splitter
// const phraseSplitterES6 = phrase => phrase.split(" ");
// console.log(phraseSplitterES6("ES6 is awesome to code every day"));
// console.log(phraseSplitterES6("ES6 is awesome to code every day")[2]);
// console.log(phraseSplitterES6("Little phrase splitter")[2][7]);

// //ES5
// const docLogEs5 = function docLog() {
//   console.log('log some docs here');
// };
// docLogEs5();

// //ES6
// const docLogEs6 = () => { console.log('log a doc here'); };
// docLogEs6();  // #document... <html>..

// // ES5 objects
// var setNameIds = function setNameIds(id, name) {
//   return {
//     id: id,
//     name: name,
//   }  
//  };
//  console.log(setNameIds (05, "Devin"));


// // ES6 objects, need to use parens around the body to distinguish between block and object
// var setNameIdsEs6 = (id, name) => ({ id:id, name: name });
// console.log(setNameIdsEs6 (44, "Wiltbank"));  //Object {id: 4, name: "Devin"}











