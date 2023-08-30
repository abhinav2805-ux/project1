async function greet(){
    return "hello world";  // return promise state is fullfilled
}

let jsonreq ='{"fact":"In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.","length":121}';
let validres = JSON.parse(jsonreq);
console.log(validres); 
console.log(validres.fact); 

let student = {
    name :"abhinav",
    age :20
};

let createjson = JSON.stringify(student);
console.log(createjson);

//using fetch for api request 

let url = "https://catfact.ninja/fact";
fetch(url)      //return promise
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((err)=>{
    console.log(err);
});


// using async and await

// async function getfacts(){
//     try{
//         let res1 = await fetch(url);
//         let data1 = await response.json();
//         console.log(data1);


//         let res2 = await fetch(url);
//         let data2 = await response2.json();
//         console.log(data2);
//     }
//     catch{
//         console.log("error");
//     }
// }

// axios

async function getfacts(){
    try{
        let res1 = await axios.get(url);
        let data1 = await response.json();
        console.log(data1);


        let res2 = await axios.get(url);
        let data2 = await response2.json();
        console.log(data2);
    }
    catch{
        console.log("error");
    }
}









