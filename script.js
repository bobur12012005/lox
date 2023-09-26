let first_arr = [4, 16, 19, 22, 11, 144, 967, 19124]
let even = first_arr.filter((num) => num % 2 === 0)
console.log('e-numbers: ' + even);
let odd = first_arr.filter((number) => number % 2 > 0)
console.log('o-numbers: ' + odd);

let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 40 } }]]
let total = 0
for(let item of arr){
    for(let item2 of item){
       total += item2.a.price
    }
}
console.log(total);