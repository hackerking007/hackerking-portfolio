//Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
filterBtns=filterContainer.children;
totalFilterBtn=filterBtns.lenghth;
portfolioItems=document.querySelectorAll(".portfolio-item"),
totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active");
       this.clickList.add(("active"));

        const filterValue= this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute(".data-category")){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if(filterValue === "all"){
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}

//Portfolio Lightbox
const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter");

let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}
//this function is used for working of next buttons
    function nextItem(){
        if(itemIndex === totalPortfolioItem-1){
            itemIndex-0;
         }
         else{
             itemIndex++
         }
        changeItem(); 
    }
    //this function is used for working of prev buttons
    function prevItem(){
        if(itemIndex === 0){
           itemIndex=totalPortfolioItem-1;
         }
         else{
             itemIndex--;
         }
        changeItem(); 
    }
// this functio is used to toggle open (class name ) which is used to zoom images on click
function toggleLightbox(){
    lightbox.classList.toggle("open");
}

function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");//to fetch image source
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHtml;
    lightboxCounter.innerHtml= (itemIndex) + "of" + totalPortfolioItem;
}

//close lightbox
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})