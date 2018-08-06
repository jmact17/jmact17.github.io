document.addEventListener("DOMContentLoaded", function() {
    let wrapper = document.querySelector("#wrapper");
    let topLayer = document.querySelector(".top");
    let handle = document.querySelector(".handle");
    let skew = 0;
    let delta = 0;
    
    //if wrapper and skewed
    if (wrapper.className.indexOf("skewed") != -1) { //if found
        skew = 1000;
    }

    wrapper.addEventListener("mousemove", function(e) {
        delta = (e.clientX - window.innerWidth / 2) / 2;
        handle.style.left = e.clientX + delta + "px";
        topLayer.style.width = e.clientX + skew + delta + "px";
    });

    window.onclick = function() {
        location.href = "gallery.html";
    }
});

