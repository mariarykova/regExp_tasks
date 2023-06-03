//Удалить из строки все не уникальные символы
//Необходимо написать регулярное выражение, которое бы удаляла из строки все сиволы,
//которые встречются более одного раза в этой строке.

//const myRegExp = /(\w)\1+/g;

const myRegExp = /(.)(?=(.*?)\1)/g;

//const result = "abaceffgw".replace(myRegExp, (...args) => {
//  console.log(...args);
//  return "";
//}); //"bcegw";

const result = "abaceffgw".replace(myRegExp, ""); //"bcegw";

console.log(result);
