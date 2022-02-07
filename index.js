// Write your code here!
const elem = document.querySelector('main');
elem.parentNode.removeChild(elem);

const newHeader = document.createElement("H1");
document.body.appendChild(newHeader);
newHeader.id = "victory";

newHeader.textContent = 
"Lyssie Wright is the champion";