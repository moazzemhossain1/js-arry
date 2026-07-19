const numbers=[23,22,21];
console.log(numbers);
const lenght=numbers.length;
console.log(lenght);
console.log(numbers[0]);
console.log(numbers[2]);
numbers[1]=4544;
console.log("Change arry :", numbers);
numbers.push(4322);
console.log("Add items arry : ", numbers);
numbers.pop();
console.log("Remove items arry : " , numbers);
numbers.unshift(34322);
console.log("Add the number stars : " , numbers);
numbers.shift();
console.log('Remove the items on start : ' , numbers);

const result=numbers.includes(21);
console.log("Chake this number of arry : ", result);

