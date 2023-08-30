let student = {
    name : "abhinav",
    age : 20,
    marks : 90.8,
};

student.age = 34;
student.gender = "male";
console.log(student);
delete student.age ;
console.log(student);


console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-123));
console.log(Math.pow(8,2));
console.log(Math.floor(8.9)); // round off near interger lower
console.log(Math.ceil(9.6)); // round off near interger larger
console.log(Math.random());  // 0 to 1 but 1 is exclusive


//to get random no from 1 to 100
console.log(Math.ceil(Math.random()*100));

//to get random no from 20 to 25
console.log(Math.floor(Math.random()*5)+20);



// guessing game    1 to max
const max = prompt("enter max no");
const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("enter your guess ");
while(true){
    if(guess == "quit") {
        console.log("user quit");
        break;
    }
    else if(guess == random){
        console.log("congantulation you are right");
        break;
    }
    else guess = prompt("enter your guess ");
}






