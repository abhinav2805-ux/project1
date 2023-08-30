let smallimages = document.getElementsByClassName("oldImg");
for(let i = 0 ;i<smallimages.length;i++){
    console.log(smallimages[i].src);
}

let links = document.querySelectorAll(".box a");
for(let i = 0 ;i<links.length;i++){
    links[i].style.color= "green";
}

let heading = document.querySelector("h1");
console.log(heading.classList.add("green"));






















