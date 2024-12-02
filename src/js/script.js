// *** LIGHTBOX ***

const LightBoxImg = document.querySelector("#Lightbox img");
const LightBox = document.querySelector("#Lightbox");


document.querySelectorAll("[data-full-img]").forEach ((imgThumb)=>{
    imgThumb.addEventListener("click", (evt)=>{
        LightBoxImg.src = imgThumb.dataset.fullImg;
        LightBox.showModal();
    });
}); 

LightBoxImg.addEventListener("click", ()=> LightBoxImg.close ()); 


