//your JS code here. If required.
const partag = document.getElementById("metaverse");
const versebtn = document.getElementById("enterBtn");

versebtn.addEventListener("click",()=>{
  const newText = partag.textContent;

  partag.innerHTML = `<h1>${newText}</h1>`;
});