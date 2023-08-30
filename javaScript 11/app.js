setTimeout(()=>{
    console.log("abhinav");
},2000);
console.log("abhinav gupta........ ");

h1 = document.querySelector("h1");
function changecolor(color,delay){
    setTimeout(()=>{
        h1.style.color = color;
    },delay);
};
changecolor("red",1000);
changecolor("blue",2000);
changecolor("green",3000);





function savetodb(data,success,failure){
    let internetspeed = Math.floor(Math.random()*10)+10;
    if(internetspeed>4) success();
    else failure();
}
savetodb("apna college",()=>{
    console.log("save data 1");
    savetodb("abhinav",()=>{
        console.log("data2 is saved");
    },()=>{
        console.log("data 2 not save");
    })
},()=>{
    console.log("not save data 1");
})

// promises

function savetodbp(data){
    return new Promise ((success,failure)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4) success();
        else failure();
    })
};
savetodbp("abhinav");

let request = savetodbpromise("apna college");
request
.then(()=>{
    console.log("promise resolve");
})
.catch(()=>{
    console.log("promise rejected");
});



 let req = savetodb("apna college");
 req
.then(()=>{
    console.log("data 1 saved");
    return savetodb("abhinav");
})
.then(()=>{
    console.log("data 2 saved");
    return savetodb("gupta");
})
.then(()=>{
    console.log("data 3 saved");
})
.catch(()=>{
    console.log("weak connection");
});







