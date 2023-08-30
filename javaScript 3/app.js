let msg = "     Hello      ";
let str = msg.trim();
console.log(`${msg} &  ${str}`);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.lastIndexOf('l'));
console.log(str.indexOf('l'));

console.log(msg.trim().toUpperCase());

let st = "ILoveCoding";
console.log(st.slice(5));
console.log(st.slice(1,5));
console.log(st.slice(-3));

 let lk = st.replace("Love","pasand");
 console.log(lk);

 console.log(st.repeat(7));

 console.log(msg.trim().replace('l','t').replace('l','t').repeat(3));

 let students = ["aman","ram","chaman",90,89];
console.log(students);
console.log(students[2]);
console.log(typeof(students));
console.log(students.length);
console.log(students[0]);
console.log(students[0][0]);
console.log(students[0].length);
students[0] = "karan";
students[10] = "kiran";
console.log(students);

students.push("rohit");
console.log(students);

students.pop("rohit");
console.log(students);
students.shift("rohit");
console.log(students);
students.unshift("rohit");
console.log(students);

 let months = ["january","july","march","august"];
// months.shift();
// let op = months.shift();
// months.unshift("june");
// months.unshift(op);
months.splice(0,2,"july","june");
console.log(months);


let primary = ['red','yellow','blue'];
console.log(primary.indexOf("green"));
console.log(primary.indexOf("yellow"));
console.log(primary.includes("blue"));
console.log(primary.includes("Red"));

console.log(primary.reverse());
let secondary = ["a","b","c"];
console.log(primary.concat(secondary));
console.log(primary);

console.log(primary.slice(0,1));
console.log(primary.slice(-1));

console.log(primary.splice(0,1,"black","grenj"));
console.log(primary);

console.log(primary.splice(2,0,"b","k"));
console.log(primary);

primary.sort();
console.log(primary);

const arr = [1,2,3,4,5]; // store only address we can change value
console.log(arr);
arr.pop();
console.log(arr);
arr.push(78);
console.log(arr);

let brr = [[2,4],[3,6],[4,8]];
console.log(brr);
brr.push([5,10]);
console.log(brr);
console.log(brr[0].length);
console.log(brr[2][1]);



let ttt = [["X"," ","O"],[" ","X"," "],["O"," ","X"]];
console.log(ttt);




