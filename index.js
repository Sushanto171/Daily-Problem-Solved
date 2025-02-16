const s = "madam";
let new_str = s.split("").reduce((prev, current) => current + prev, "");

const isPalindrome = new_str === s ? "Yes" : "No";
console.log(isPalindrome);
