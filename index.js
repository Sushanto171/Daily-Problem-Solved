// const s = "madam";
// let new_str = s.split("").reduce((prev, current) => current + prev, "");

// const isPalindrome = new_str === s ? "Yes" : "No";
// console.log(isPalindrome);
// const arr = [-4, 3, -9, 0, 4, 1];
// const n = 6;
// let positive = [];
// let negative = [];
// let zero = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     zero.push(arr[i]);
//   } else if (arr[i] < 0) {
//     negative.push(arr[i]);
//   } else if (arr[i] > 0) {
//     positive.push(arr[i]);
//   }
// }
// console.log((positive.length / n).toFixed(6));
// console.log((negative.length / n).toFixed(6));
// console.log((zero.length / n).toFixed(6));

// const arr = [7, 1, 9, 3, 5];
// arr.sort();
// const total = arr.reduce((prev, current) => prev + current, 0);
// console.log(total - arr[arr.length - 1], total - arr[0]);

// const s = "07:05:45PM";

// let time = "";
// if (s.includes("AM")) {
//   time =
//     +s.slice(0, 2) === 12
//       ? `00:${s.slice(3, s.length - 2)}`
//       : s.slice(0, s.length - 2);
// } else {
//   time = `${12 + +s.slice(0, 2)}:${s.slice(3, s.length - 2)}`;
// }
// console.log(time.trim());

// const a = [1, 3, 5, 1, 5, 6, 8, 6];
// let unique;
// for (let i = 0; i < a.length; i++) {
//   const num = a.filter((num) => {
//     return num === a[i];
//   });

//   if (num.length === 1) {
//     unique = num[0];
//   }
// }
// console.log(unique);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

let firstValue = 0;
let secondValue = 0;
for (let i = 0; i < arr.length; i++) {
  firstValue += arr[i][i];
  secondValue += arr[i][arr.length - 1 - i];
}
console.log(Math.abs(secondValue - firstValue));
