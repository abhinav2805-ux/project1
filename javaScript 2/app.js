console.log("apna college");
console.log("apna college");
let a = 90;
let b = 43;
console.log("sum is : ",a+b);
let output = "your pay " + (a+b) + " repees";
console.log(output);
console.log("your pay",a+b,"repees");
console.log(`your pay ${a+b} rupees`);
let age = 19;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age != 18);
console.log(age == 18);
console.log(6=='6');
console.log(6==='6');



if(age>22){
    console.log("ys it is greater");
}

let color = "green";
if(color=='red'){
    console.log("stop");
}
else if(color=='yellow'){
    console.log("stop slow");
}
else{
    console.log("go");
}



// practice question ----->
let num = 12;
if((num%3 === 0) && (num+1 == 15) || (num-1 == 11)){
    console.log("safe");
}
else{
    console.log("unsafe");
}



//truthy falsy
if(""){
    console.log("true");
}
else{
    console.log("false");
}

let colour = prompt("enter colour name: ");;
switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow");
        break;
    case "green":
        console.log("go");
        break;
    default :
    console.log("breakdown");
}

alert("this is wrong");


let firstname = prompt("enter firstname ");
let surname = prompt("enter surname ");
console.warn(`${firstname} ${surname}`)


// Q1
let no = 20;
if(no/10) console.log("good");
else console.log("bad");

//Q2
let namm = prompt("enter name : ");
let ag = prompt("enter age : ");
alert(`${namm} is ${ag} years old.`);

//Q3
let quarter = 1;
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
        case 2:
            console.log("April,May,June");
            break;
            case 3:
                console.log("July,August,September");
                break;
                case 4:
                    console.log("October,November,December");
                    break;
                    default:
                        console.log("wrong input");
    
}

//Q5
let n1 = 9;
let n2 = 5;
let n3 = 2;

if(n1>n2){
    if(n1>n3) console.log(`${n1} is largest`);
    else console.log(`${n3} is largest`);
}
else if(n2>n3){
    if(n2>n1) console.log(`${n2} is largest`);
    else console.log(`${n1} is largest`);
}
else console.log(`${n3} is largest`);

//Q6
letnum1=32;
letnum2=47852;
if((num1%10)==(num2%10)){
    console.log("numbershavethesamelastdigitwhichis",num1%10);
}
else console.log("numbersdon'thavethesamelastdigit");
