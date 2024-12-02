// *** LIGHTBOX ***
const LightBoxImg = document.createElement("#Lightbox img").querySelectorAll("[data-full-img]").forEach ((imgThumb)=>{
    imgThumb.addEventListener("click", (evt)=>{
        LightBoxImg.src = imgThumb.dataset.fullImg;
    });
}); 

lightBox.showModal (); 
lightBox.close ();


