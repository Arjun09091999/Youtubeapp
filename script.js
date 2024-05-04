const menu=document.getElementById('menu');
// const first=document.getElementById('first');
const second=document.getElementById('second');
const first=document.getElementById('first');
const small_menu=document.getElementById('small_menu');
const history=document.getElementById('history');


const base_url="https://www.googleapis.com/youtube/v3";
const chanel_id="UCq-Fj5jknLsUf-MWSy4_brA";
const uplod="UUq-Fj5jknLsUf-MWSy4_brA";
const apikey="AIzaSyDTFQEJJ840r0u068ppZNNZrIHAtTI4F6s";

// menu.onclick=function(){
//     first.classList.toggle('small_menu');

// }

menu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#first').style.display='block';
    first.classList.toggle('small_menu');
    
})

async function getvideos(q){
    const url=`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=UUq-Fj5jknLsUf-MWSy4_brA&key=AIzaSyDTFQEJJ840r0u068ppZNNZrIHAtTI4F6s`;

    const res= await fetch(url,{method:"get",});
    const data=await res.json();
    data.items.forEach(el => {
        
        second.innerHTML += `
        <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
        <img id='sec' src="${el.snippet.thumbnails.maxres.url}" />
        
        
        <h3>${el.snippet.title}</h3> `
    });
    
    console.log(data.items);
    
    
}


getvideos();






