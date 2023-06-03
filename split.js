//Деление строки
// Необходимо создать массив на основе строки, где раздилителем будут символы . , ; или пробелы (подряд идущие пробелы считаюся за один)

const myRegExp = /[\.,;\s]+/;

const result = "foo    bla.bar,gd;4".split(myRegExp); // ['foo', 'bla', 'bar', 'gd', '4']

console.log(result);
