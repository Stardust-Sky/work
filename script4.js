'use strict';

let options = {
   width: 1020,
   height:1024,
   name: 'test' 


};

console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

for (let yek in options){
    console.log('свойство ' + yek + ' имеет значение ' + options[yek]);
}
console.log(Object.keys(options).length);

// let arr = [1,2,3,'four',5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('first')

// arr[99]=99;

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ")")

// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key in mass){
//     console.log(key);
// }
// for (let hi of mass){
//     console.log(hi);
// }

// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['dsdf','dfs','fg','gdfs'],
//     i = arr.join(', ');


//     console.log(i);

//     let n = arr.sort();
//     console.log(n);

let arr = [1,15,4],

    i = arr.sort(compareNum)

 function compareNum(a,b){
     return a-b;
};
console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
 