let btn = document.querySelector("button");
// console.dir(btn);  //will give object
// btn.onclick = function(){
//     console.log("hello ji");
// };
function enter(){
    console.log("you entered");
};
btn.onmouseenter = enter;

btn.addEventListener("click",enter);
btn.addEventListener("dblclick",()=>{
    console.log("you double clicked");
});

function getrandomcolor(){
       let red = Math.floor(Math.random()*255);
       let green = Math.floor(Math.random()*255);
       let blue = Math.floor(Math.random()*255);
       let color = `rgb(${red},${green},${blue})`;
       return color;
}

btn.addEventListener("click",()=>{
let h3 = document.querySelector("h3");
let div = document.querySelector("div");
h3.innerText = getrandomcolor();
div.style.backgroundColor = getrandomcolor();


});



let inp = document.querySelector("input");
inp.addEventListener("keydown",function(e){

console.log(event.key);
console.log("key was pressed");
});

inp.addEventListener("submit",()=>{
console.log(inp.value); // grt value of form
});