



// const last = (arr: Array<string | number>) => {
//     return arr[arr.length - 1]
// }

const last = <T>(arr: T[]) => {
    return arr[arr.length - 1]
}

const double = <T, B>(arr: T[], other?: B) => {
    return [arr[arr.length - 1], other]
}

const l = last([1, 2, 3])


const d = double(['hi'])

console.log(d)

console.log(l)