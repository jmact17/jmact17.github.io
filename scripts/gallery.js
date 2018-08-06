let sliderImages = document.querySelectorAll(".slide"),
    arrowRight = document.querySelector("#arrow-right"),
    arrowLeft = document.querySelector("#arrow-left"),
    current = 0;

// clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// initialize slider
function startSlide() {
    for (let i = 1; i <= sliderImages.length; i++) {
        document.querySelector(".slide" + i).style.backgroundImage = "url('images/gallery/" + i + ".jpg')";
    }
    reset();
    sliderImages[0].style.display = "block";
    
}

// show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// left arrow click
arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length + 1;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener("click", function() {
    console.log(current);
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();