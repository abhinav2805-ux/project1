// Q1
let arr = [1,2,3,4,5,6,2,3];
let brr = [];
let num = 2;
for(let i = 0 ;i<arr.length;i++){
    if(arr[i]!=num) brr.push(arr[i]);
}
for(let i = 0 ;i<brr.length;i++){
     console.log(brr[i]);
}

//Q4
console.log("Q4");
let no = 7;
let pro =1;
for(let i = 1;i<=no;i++){
    pro = pro*i; 
}
console.log(`${no} factorial is : ${pro}`);


//Q5
console.log("Q5");
let crr = [1,5,8,6,7,3,8,2,9,41,6,8];
let max = 0;
for(let i = 0 ;i<crr.length;i++){
     if(crr[i]>max) max = crr[i];
}
console.log(max);


