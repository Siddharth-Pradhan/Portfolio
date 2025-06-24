const vid1=document.getElementById("pro1");
const vid2=document.getElementById("pro2");
const vid3=document.getElementById("pro3");
const hs=document.querySelector(".hover-sign");

const vidlist=[vid1,vid2,vid3];

vidlist.forEach(function(video){
  video.addEventListener('mouseover',function(){
    video.play();
    hs.classList.add("active");
  })

  video.addEventListener('mouseout',function(){
    video.pause();
     hs.classList.remove("active");
  })
})
