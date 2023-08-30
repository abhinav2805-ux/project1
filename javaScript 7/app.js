//this keyword
const student ={

    name: "abhinav",
    age : 20,
    eng: 80,
    maths:96,
    phy :83,
    getavg : function(){
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(avg);
    }

};
student.getavg();

// try and catch

try{
    console.log(a);
}
catch{
    console.log("error");
}

// arrow function

const average =(a,b,c)=>{
    return (a+b+c)/3;
}
console.log(average(9,8,7));

//implicit arrow function

const div = (a,b)=> a/b;

console.log(div(6,3));

// set timeout

const heloo = ()=>{
    console.log("apna college");
}
console.log("hi there!");
setTimeout(heloo,5000);
console.log("welcome");

// set interval
let id = setInterval( ()=>{
    console.log("abhinav");
},2000);
clearInterval(id); // stop setiterval


// this with arrow functions

const info = {

name: "aman",
age: 56,
prop: this,
getname : function(){
    console.log(this);
    console.log(this.name);
},
getage:()=>{
    console.log(this);
    console.log(this.age);
}
};
info.getage();
info.getname();













