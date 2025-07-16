// Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function greetings(username) {
    return `Hello ${username}`
}

const result = greetings('Alex')
console.log(result)

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.
// Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [1, 2, 3, 4, 5, 10, 11, 13, 15, 20]
function checkNumberMoreThan10(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            return array[i]
        }
    }
    return 'No match'
}
console.log(checkNumberMoreThan10(numbers))


// Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.
// При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1.
// То есть мы получаем разницу между первым и вторым аргументом.
// Запишите результат выполнения функции в переменную и выведите в консоль.
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function calculator(firstNumber, secondNumber, operator) {
    if (operator == 'plus') {
        return firstNumber + secondNumber
    }
    if (operator == 'minus') {
        return firstNumber - secondNumber
    }
    if (operator == 'multiplication') {
        return firstNumber * secondNumber
    }
    if (operator == 'divining') {
        return firstNumber / secondNumber
    }
}
const answer = (calculator(2, 3, 'multiplication'))
console.log(answer)


// Создайте объект с вашим описанием(имя, возраст и т.д.).
// Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const user = {
    name: 'Vladislav',
    age: 25,
    isAdmin: false,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
user.sayHello('Vladislav')

// Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0.
// Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу.
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


const users = [
    {
        name: 'Vladislav',
        age: 25,
        isAdmin: false
    } ,
    {
        name: 'Elizabeth', 
        age: 24,
        isAdmin: false
    } ,
    {
        name: 'Freddy',
        age: 1,
        isAdmin: true
    }
]
const simpleUser = users(isAdmin(false))
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        console.log(simpleUser)
    }
}

