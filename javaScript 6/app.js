function hello(){
    console.log("hello ji");
}
function print(){
    for(let i=1;i<=5;i++)console.log("hello ji");
}
print();

function dice(){
    console.log(Math.floor(Math.random()*6)+1)
}
dice();

function printinfo(name,age){
    console.log(name , age);
}
printinfo("abhinav",20);

function avg(a,b,c){
    console.log((a+b+c)/3);
}

function avgr(a,b,c){
     return (a+b+c)/3;
}

avg(3,4,6);
console.log(avgr(3,4,6));


function getsum(n){
    let sum = 0;
    for(let i =0;i<=n;i++){
        sum = sum +i;
    }
    return sum;
}
console.log(getsum(100));

{
    let a = 25;  // block scope 
}
// console.log(a);

function outerfunc(){
    let x = 4;
    let y = 90;
    function innerfunc(){
        console.log(y);
    }
    innerfunc();
}

outerfunc(); // lexical scope


let sum = function(a,b){
    return a+b;
}
console.log(sum(9,8));

const calculator = {

    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },

    multiply: function(a,b){
        return a*b;
    }
};

console.log(calculator.multiply(5,6));
// shorthand for method
const calculator_shaothand = {

    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },

    multiply(a,b){
        return a*b;
    }
};
console.log(calculator_shaothand.add(5,6));