// Add your functions here
// map functions
const mapToNegativize = (arr, function) => {
  return arr.map(item => item);
};
console.log(mapToNegativize([1, 2, 3, -9], function(a){ return a * a }));

// function mapToNegativize(arr, function(a) {
//   arr.map(item => item)
// }, " Gary")

const mapToNoChange = (arr) => {
  return arr.map(item => item);
};
console.log(mapToNoChange([1,2,3]));

const mapToDouble = (arr) => {
  return arr.map(item => item * 2);
};
console.log(mapToDouble([1,2,3]));

const mapToSquare = (arr) => {
  return arr.map(item => item * item);
};
console.log(mapToSquare([1,2,3]));




