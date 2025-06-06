const words = ["am learning Web Development","am an ISTP","do some Python programming","am Iron Man"]
let index=0;

setInterval(()=>{
    index = (index+1)%words.length;
    document.getElementById("changing-text").textContent = words[index];
},3000);
