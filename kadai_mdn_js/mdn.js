const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // getMonth()は0から始まるので+1します
const day = date.getDate();

console.log(year + '年' + month + '月' + day + '日');