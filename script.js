
let input = document.getElementById("text");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
/* let userName = document.getElementById("name");
let img = document.getElementById("img");
let div = document.getElementById("div"); */

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

async function getData(search) {
  try {
    console.log(search);
    let response = await fetch(`https://api.github.com/users/${search}`);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", async () => {
 
  let search = input.value;
    console.log(search);
    let final =  await getData(search);
   result.innerHTML=`
   <div>
   <img src="${final.avatar_url}" alt="" >
   <span >${final.login}</span>
   
   </div>
   <div>
   <span>${final.name}</span>
   </div>
   <div>
   <span>${final.bio}</span>
   </div>
   <div>
   <span>${final.location}</span>
   </div>`
  
  });
  
 
