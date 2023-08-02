const txt=document.querySelector('.txt');




const fetchData=async()=>{
    const res=await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    const data=await res.json();
    txt.innerText=data.joke;
}
fetchData();

const reloadPage=()=>{
    location.reload();
  
}