//Шаблонизатор
// Необходимо написать функцию, которая принимает строковый шаблон и объект параметров,
// и возвращает результат применения данных к этому шаблону.
// Для решения задачи нужно использовать регулярное выражение с запоминающими скобками и метод replace у строки.
// В качестве тренировки можно сделать это задание без регулярного выражения.

function format(str, obj) {
  const result = str.replace(/\$\{([\w]+)\}/g, (_, $1) => {
    return obj[$1];
  });

  return result;
}

// Hello, Bob! Your age is 10.
const res = format("Hello, ${user}! Your age is ${age}.", {
  user: "Bob",
  age: 10,
});

console.log(res);