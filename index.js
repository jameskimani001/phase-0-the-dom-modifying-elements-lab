
let newHeader;


const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
}


newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = 'Techie kim is the champion'; 


document.body.appendChild(newHeader);
