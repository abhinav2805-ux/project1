let arr = [1,2,3,4,5,6];
let print = function(ele){
    console.log(ele);
}
arr.forEach(print);

let dou = arr.map(function(ele){
    return ele*3;
})

let even = arr.filter(function(num){
    return num%2==0;
})

arr.every(function(el){
    el%2==0;
})

arr.reduce(function(res,ele){
    return res+ele;
})

//max in array

let result = arr.reduce(function(max,ele){
    if(ele>max) return ele;
    else return max;
})
console.log(result);

// default parameter 
function sum(a,b=90){
    return a+b;
}
console.log(sum(7));

//spread   ...
console.log(Math.min(...arr));
console.log(...arr);


let newarr = [...arr];
console.log(newarr);







