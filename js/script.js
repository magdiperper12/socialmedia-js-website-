function show() {
    var x = document.getElementById("t-gr");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function sho() {
    var x = document.getElementById("t-ev");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function shm() {
    var x = document.getElementById("t-ph");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function delet() {
    var x = document.getElementById("r-block1");
      x.style.display = "none";
  }

  function dele() {
    var x = document.getElementById("r-block2");
      x.style.display = "none";
  }
  function del() {
    var x = document.getElementById("block4");
      x.style.display = "none";
  }
let s =document.getElementById("reload");
s.addEventListener("click",function(){
    location.reload();
})


//like counter

 let btn = document.getElementById("cl");
 num = document.getElementById("cln");
 a=1;
 btn.addEventListener("click",()=>{
    a++;
    num.innerHTML=a;
 })


//time at the website
let seconds = 0,
    tens = 0,
    appendtens = document.getElementById("tens"),
    appendsecoond = document.getElementById("second");

function startTimer(){
    tens++;
    if(tens<9){
        appendtens.innerHTML = "0"+tens;
    }
    if(tens>9){
        appendtens.innerHTML = tens;
    }
    if(tens>59){
        seconds++;
        appendsecoond.innerHTML = "0"+seconds;
        tens = 0;
        appendtens.innerHTML = "0"+0;
    }
    if(seconds>9){
        appendsecoond.innerHTML = seconds;  
    }
}

onload = function(){
    interval = setInterval(startTimer,1000)
}
 
function prof(){
    let x = document.getElementById("container");
    let z =  document.getElementById("container-pro");

    x.style.display = "none";
    z.style.display = "block";
}

//post and color
/*
 function post() {
  let header = document.getElementById("magdi");
  let colore = document.getElementById("texting");
  let colo = document.getElementById("coloree");

  header.innerHTML = colore.value;
  header.style.color = colo.value;
}
*/

let fromText = document.querySelector("#texting"),
bott = document.querySelector(".bott");

let loadFile = function (event) {
  let image = document.getElementById('output');
  let fole = document.getElementById('fole');
  image.src = URL.createObjectURL(event.target.files[0]);
  if(image.src == null || image.src == ""){
    fole.style.display = "block";
  }
else{
  fole.style.display = "none";
}
};

bott.addEventListener("click",()=>{
    let text = fromText.value,
   container = document.querySelector(".conte"),
   colo = document.getElementById("coloree"),
   x;
   
   

    if(text == null || text == ""){
    x = "";
    }
    else{
      
      x= `
      <div class="c-block2">
                  <div class="row">
                      <div class="col-6 m">
                          <img src="image/magdi1.jpg" alt="">
                          <h3>M.R Magdi</h3>
                      </div>
                      <div class="col-6 n" style="text-align: right;">1 min</div>
                  </div>
                  <div class="bod">
                      <p id="magdi" style="color:${colo.value}">${text}</p>
                      <div class="op" style="margin:1px auto;text-align:center">

                      <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"
                                style="display: none;">
                            <label for="file" id="fole" style="cursor: pointer;">Upload Image</label>
                              <img id="output" width="200" />

                      </div>
  
                      <div>
                          <div style="color: rgb(0, 4, 77);font-size: 17px;display: inline-block;"><span class="num"
                                  id="cln">1</span>
                              Like</div>
                          <div style="color: rgb(0, 4, 77);font-size: 17px;display: inline-block;margin-left: 20px;"><span
                                  class="num">5</span>
                              Comment</div>
                      </div>
  
                      <button class="like" id="cl"><i class="fa-solid fa-thumbs-up "></i><span>Like</span></button>
                      <button><i class="fa-solid fa-comment "></i><span>Comment</span></button>
                      
                  </div>
              </div>
      
      `;
      
    }
 
     container.insertAdjacentHTML("afterbegin",x);

    
})




let iconCopy2 = document.querySelector(".cupybest");
let cop = document.querySelector("#cop");
let iconspeech = document.querySelector(".reader");


//clipboard 
iconCopy2.addEventListener("click",()=>{
    navigator.clipboard.writeText(cop.innerHTML);
})
//Speech 
iconspeech.addEventListener("click",()=>{
    let utterance =new SpeechSynthesisUtterance(cop.innerHTML);
    utterance.lang = cop.value;
    speechSynthesis.speak(utterance);
})