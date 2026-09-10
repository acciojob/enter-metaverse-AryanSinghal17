//your JS code here. If required.
const partag = document.getElementById("status");
const versebtn = document.getElementById("enterBtn");

versebtn.addEventListener("click",()=>{
  const newText = "Entered Metaverse";

  partag.innerHTML = `<h1>${newText}</h1>`;
});