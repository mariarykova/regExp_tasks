//Проверка пароля
// Необходимо написать регулярное выражение, которое при вызове test на строке будет давать false,
// если в строке есть символы отличные от латинских, цифр, подчеркивания и знака $.

const myRegExp = /^[\w_$]+$/;

const result = myRegExp.test("привет"); // false
const result2 = myRegExp.test("hi_$"); // true
const result3 = myRegExp.test("приветHello"); // false

console.log(result);
console.log(result2);
console.log(result3);
