document.addEventListener("DOMContentLoaded", function(event) {
    //alert("Hello JavaScript");
    
    //使图片变大
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
    if (targetImage.classList.contains("small")) {
        targetImage.classList.remove("small");
        } else {
        targetImage.classList.add("small");
        }
    });
});
