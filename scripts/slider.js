document.addEventListener("DOMContentLoaded", function() {
    let wrapper = document.querySelector("#wrapper");
    let topLayer = document.querySelector(".top");
    let handle = document.querySelector(".handle");
    let skew = 0;
    let delta = 0;
    var stuck = true;
    
    //if wrapper and skewed
    if (wrapper.className.indexOf("skewed") != -1) { //if found
        skew = 1000;
    }

    function mouseFollow(e) {
        delta = (e.clientX - window.innerWidth / 2) / 2;
        handle.style.left = e.clientX + delta + "px";
        topLayer.style.width = e.clientX + skew + delta + "px";
    }

    // wrapper.addEventListener("mousemove", mouseFollow);

    window.onclick = function() {
        if (stuck == false) {
            stuck = true;
            wrapper.removeEventListener("mousemove", mouseFollow);
        } else {
            stuck = false;
            wrapper.addEventListener("mousemove", mouseFollow);
        }
    }
});

