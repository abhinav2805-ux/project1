//odd no.
for(let i=1;i<=10;i++){
   if(i%2!=0) console.log(i);

}
for(let i=1;i<=10;i=i+2){
    console.log(i);
 
 }

 //even no
 for(let i=0;i<=10;i++){
    if(i%2==0) console.log(i);
 
 }
 for(let i=0;i<=10;i=i+2){
     console.log(i);
  
  }


  
  //multiplicatiion n0;
  console.log('table');
  let n = prompt("enter no : "); // n = string
  n = parseInt(n);// string to interger
  for(let i =1;i<=10;i++){
    console.log( `${n} X ${i} = ${n*i}`);
  }

  //nested for loop
  console.log("nested for loop");
  for(let i =1;i<=4;i++){
    for(let j =1;j<=4;j++){
        console.log(j);
    }
  }

// while loop
console.log("while loop");
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

//loop with  array

let arr = [1,2,3,40,5,6];
for(let i=0;i<=5;i++){
    console.log(arr[i]);
}

//nested array me loop
let brr = [['a','b','c'],['d','e','f','g']];
for(let i = 0;i<brr.length;i++){
    for(let j = 0;j<brr[i].length;j++){
        console.log(brr[i][j]);
    }
}

//for of loop
console.log("for of loop");
let crr = [1,2,3,40,5,6];
for(ele of crr){
    console.log(ele);
}



