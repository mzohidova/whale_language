let input = 'Free Willy the movie';

const vowels = ['i', 'o', 'e', 'u', 'a'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  // console.log (`i is ${i}`);
  for (let j = 0; j < vowels.length; j++) {
    // console.log (`j is ${j}`);
    if (vowels [j] === input [i]) {
      if (input [i] === 'e') {
    resultArray.push ('ee'); 
        } else if (input [i] === 'u') {
    resultArray.push ('uu'); 
        } else { 
      resultArray.push (input[i]);
        }
      }
    }
  }

  console.log (resultArray.join('').toUpperCase());

