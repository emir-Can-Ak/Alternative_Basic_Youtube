const btnLocate = document.querySelector(".locate-button");
const srchInput = document.querySelector(".search-input");
const btnLocate2 = document.querySelector(".locate-settings");
const btnLocate3 = document.querySelector(".locate_manage");


btnLocate.addEventListener("click", () => {
    window.open("https://www.youtube.com/");
})
btnLocate2.addEventListener("click", () => {
    window.open("https://www.youtube.com/");
})
btnLocate3.addEventListener("click", () => {
    window.open("https://www.youtube.com/");
})

srchInput.addEventListener("keyup", (e) => {
    console.log(e)
    if(e.keyCode == "13"){
        window.open("https://www.youtube.com/")
    }
})

const hidden_button = document.querySelector(".image2");
var isExecuted = false;
hidden_button.addEventListener("mouseover", () =>{
    let change = hidden_button.querySelector("button");
    if(clickcount < 1 && !isExecuted){
      change.style.opacity = 1;
      isExecuted = true;
    }
})
var clickcount = 0;
function Slide(){
    clickcount++;

    const button = document.querySelector('button.hidden');
    button.remove();
    setTimeout(() =>{
      const newButton = document.createElement('button');
      newButton.setAttribute('onclick', 'Slide()');
      newButton.setAttribute('class', 'hidden');
      document.querySelector(".image2").appendChild(newButton);
      newButton.style.opacity = 1;
      const icon = document.createElement('i');
      icon.setAttribute('class', 'fa-solid fa-arrow-right');
      newButton.appendChild(icon);
    }, 400)

    //This part may look complicated but it is simple, every case include same code with different numbers and these numbers equals that the case's number

    switch (clickcount) {
        case 1:
    const btnLocateFrstImg = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg.remove();
      }, 400);
    const AddNewImg = document.querySelector(".image2");
    const newDiv = document.createElement("div");
    AddNewImg.appendChild(newDiv);
    newDiv.className = "thumbnail-container2";
    const newImg = document.createElement("img");
    const newText = document.createElement("h4");
    newDiv.id = "animate-in";
    setTimeout(() => {
        newDiv.appendChild(newImg);
        newImg.src = "shorts1.png"
        newImg.alt = "";
        newDiv.appendChild(newText);
        newDiv.id = "animate-in_second";
      }, 400);
    newText.textContent = "Squares | HTML CSS";
            break;
        case 2:
    const btnLocateFrstImg2 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg2.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg2.remove();
      }, 400);
    const AddNewImg2 = document.querySelector(".image2");
    const newDiv2 = document.createElement("div");
    AddNewImg2.appendChild(newDiv2);
    newDiv2.className = "thumbnail-container2";
    const newImg2 = document.createElement("img");
    const newText2 = document.createElement("h4");
    newDiv2.id = "animate-in";
    setTimeout(() => {
        newDiv2.appendChild(newImg2);
        newImg2.src = "shorts2.png"
        newImg2.alt = "";
        newDiv2.appendChild(newText2);
        newDiv2.id = "animate-in_second";
      }, 400);
    newText2.textContent = "Toggle Button Without HTML, CSS Or ";
        break;
        case 3:
    const btnLocateFrstImg3 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg3.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg3.remove();
      }, 400);
    const AddNewImg3 = document.querySelector(".image2");
    const newDiv3 = document.createElement("div");
    AddNewImg3.appendChild(newDiv3);
    newDiv3.className = "thumbnail-container2";
    const newImg3 = document.createElement("img");
    const newText3 = document.createElement("h4");
    newDiv3.id = "animate-in";
    setTimeout(() => {
        newDiv3.appendChild(newImg3);
        newImg3.src = "shorts3.png"
        newImg3.alt = "";
        newDiv3.appendChild(newText3);
        newDiv3.id = "animate-in_second";
      }, 400);
    newText3.textContent = "How To Master Javascript";
        break;
        case 4:
    const btnLocateFrstImg4 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg4.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg4.remove();
      }, 400);
    const AddNewImg4 = document.querySelector(".image2");
    const newDiv4 = document.createElement("div");
    AddNewImg4.appendChild(newDiv4);
    newDiv4.className = "thumbnail-container2";
    const newImg4 = document.createElement("img");
    const newText4 = document.createElement("h4");
    newDiv4.id = "animate-in";
    setTimeout(() => {
        newDiv4.appendChild(newImg4);
        newImg4.src = "shorts4.png"
        newImg4.alt = "";
        newDiv4.appendChild(newText4);
        newDiv4.id = "animate-in_second";
      }, 400);
    newText4.textContent = "Manage your Javascript with import map";
        break;
        case 5:
    const btnLocateFrstImg5 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg5.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg5.remove();
      }, 400);
    const AddNewImg5 = document.querySelector(".image2");
    const newDiv5 = document.createElement("div");
    AddNewImg5.appendChild(newDiv5);
    newDiv5.className = "thumbnail-container2";
    const newImg5 = document.createElement("img");
    const newText5 = document.createElement("h4");
    newDiv5.id = "animate-in";
    setTimeout(() => {
        newDiv5.appendChild(newImg5);
        newImg5.src = "shorts5.png"
        newImg5.alt = "";
        newDiv5.appendChild(newText5);
        newDiv5.id = "animate-in_second";
      }, 400);
    newText5.textContent = "Memory Game in React JS";
        break;
        case 6:
    const btnLocateFrstImg6 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg6.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg6.remove();
      }, 400);
    const AddNewImg6 = document.querySelector(".image2");
    const newDiv6 = document.createElement("div");
    AddNewImg6.appendChild(newDiv6);
    newDiv6.className = "thumbnail-container2";
    const newImg6 = document.createElement("img");
    const newText6 = document.createElement("h4");
    newDiv6.id = "animate-in";
    setTimeout(() => {
        newDiv6.appendChild(newImg6);
        newImg6.src = "shorts6.png"
        newImg6.alt = "";
        newDiv6.appendChild(newText6);
        newDiv6.id = "animate-in_second";
      }, 400);
    newText6.textContent = "What is CSS?";
        break;
        case 7:
    const btnLocateFrstImg7 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg7.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg7.remove();
      }, 400);
    const AddNewImg7 = document.querySelector(".image2");
    const newDiv7 = document.createElement("div");
    AddNewImg7.appendChild(newDiv7);
    newDiv7.className = "thumbnail-container2";
    const newImg7 = document.createElement("img");
    const newText7 = document.createElement("h4");
    newDiv7.id = "animate-in";
    setTimeout(() => {
        newDiv7.appendChild(newImg7);
        newImg7.src = "shorts7.png"
        newImg7.alt = "";
        newDiv7.appendChild(newText7);
        newDiv7.id = "animate-in_second";
      }, 400);
    newText7.textContent = "CSS is pretty";
        break;
        case 8:
    const btnLocateFrstImg8 = document.querySelector(".thumbnail-container2");
    btnLocateFrstImg8.id = "animate-out";
    setTimeout(() => {
        btnLocateFrstImg8.remove();
      }, 400);
    const AddNewImg8 = document.querySelector(".image2");
    const newDiv8 = document.createElement("div");
    AddNewImg8.appendChild(newDiv8);
    newDiv8.className = "thumbnail-container2";
    const newImg8 = document.createElement("img");
    const newText8 = document.createElement("h4");
    newDiv8.id = "animate-in";
    setTimeout(() => {
        newDiv8.appendChild(newImg8);
        newImg8.src = "shorts8.png"
        newImg8.alt = "";
        newDiv8.appendChild(newText8);
        newDiv8.id = "animate-in_second";
      }, 400);
    newText8.textContent = "Dowload button (SVG)";
    clickcount = 0;
        break;
        default:
            break; 
    }
}
