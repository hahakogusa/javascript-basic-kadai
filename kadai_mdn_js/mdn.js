const date = new Date();
const year = date.getFullYear(2026);
const month = date.getMonth(6) + 1; // getMonth()は0から始まるので+1します
const day = date.getDate(11);

console.log(year + '年' + month + '月' + day + '日');