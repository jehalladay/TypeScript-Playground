"use strict";

let myString: string = 'Hello world';
let myNum: number = 2;
let myBool: boolean = false;
let myVar: any = true;


let strArray: string[] = ['hello', 'again', 'world']
let numArray: number[] = [1, 2, 3]
let boolArray: boolean[] = [true, false]

let strArray2: Array<string> = ['goodbye']

let strNumTuple: [string, number] = ['hello', 14]

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;


console.log(myString)
console.log(
    `${myNum}`,
    `\n${myBool}`,
    `\n${myVar}`,
    `\n${strArray}`,
    `\n${numArray}`,
    `\n${boolArray}`,
    `\n${strArray2}`,
    `\n${strNumTuple}`,
    `\n${myVoid}`
)