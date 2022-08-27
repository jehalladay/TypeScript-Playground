console.log('hello world');
function getSum(num1, num2) {
    return num1 + num2;
}
function getFunc(num) {
    return function () { return "hello world"; };
}
console.log(getSum(1, 23));
console.log(getSum(1, 2));
console.log((getFunc(1)()));
