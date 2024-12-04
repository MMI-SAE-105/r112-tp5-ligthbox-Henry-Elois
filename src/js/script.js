// *** LIGHTBOX ***

const lightBox = document.querySelector("#lightbox");
const lightBoxImg = lightBox.querySelector("img");

document.body.addEventListener("click", (evt)=> {
    console.log(evt.target);
    
    if (evt.target.matches("[data-full-img]")) {
        lightBoxImg.src = evt.target.dataset.fullImg;
        lightBox.showModal();}
    });

    
 lightBox.addEventListener("click", (evt) => {
    lightBox.classList.add("sortie");
    lightBox.addEventListener("animationend", () => {
        lightBox.classList.remove("sortie");
        lightBox.close();
    }, {once: true});
}); 


