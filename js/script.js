const D={
  "oracle": [
    "assets/docs/oracle.jpg"
  ],
  "ms": [
    "assets/docs/ms.jpg"
  ],
  "gcp": [
    "assets/docs/gcp.jpg"
  ],
  "iitm": [
    "assets/docs/iitm.jpg"
  ],
  "fractal": [
    "assets/docs/fractal.jpg"
  ],
  "aws": [
    "assets/docs/aws.jpg"
  ],
  "deloitte": [
    "assets/docs/deloitte.jpg"
  ],
  "tataviz": [
    "assets/docs/tataviz.jpg"
  ],
  "walmart": [
    "assets/docs/walmart.jpg"
  ],
  "hpe": [
    "assets/docs/hpe.jpg"
  ],
  "jpm": [
    "assets/docs/jpm.jpg"
  ],
  "tatagenai": [
    "assets/docs/tatagenai.jpg"
  ],
  "resume": [
    "assets/docs/resume.jpg"
  ]
};const m=document.getElementById("m"),x=document.getElementById("x");function cl(){m.classList.remove("on");x.hidden=true;m.innerHTML="";document.body.style.overflow=""}document.addEventListener("click",e=>{const b=e.target.closest("[data-k]");if(b){e.preventDefault();m.innerHTML=D[b.dataset.k].map(s=>'<img alt="Document" src="'+s+'">').join("");m.classList.add("on");x.hidden=false;m.scrollTop=0;document.body.style.overflow="hidden"}});x.onclick=cl;m.onclick=e=>{if(e.target===m)cl()};document.addEventListener("keydown",e=>{if(e.key==="Escape")cl()})
