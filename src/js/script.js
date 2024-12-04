// *** LIGHTBOX ***


const lightBox = document.querySelector("#Lightbox");

document.body.addEventListener("click", (evt)=> {
    if (evt.target.matches("[data-full-image]")) {
        LightBoxImg.src = evt.target.dataset.fullImg;
        LightBox.showModal();}
    });

    
 

lightBox.addEventListener("click", (evt) => {
    lightBox.classList.add("sortie");
    lightBox.addEventListener("animationend", () => {
        lightBox.classList.remove("sortie");
        lightBox.close();
    });
}); 


