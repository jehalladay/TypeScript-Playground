console.log('hello world')

function getSum(num1: number, num2: number): number {
    return num1 + num2
}

function getFunc(num: number): fn {
    return function() { return "hello world"}
}

interface fn {
    ():string
}

console.log(getSum(1, 23))
console.log(getSum(1, 2)) 

console.log((getFunc(1)()))