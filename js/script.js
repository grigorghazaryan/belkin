AOS.init();

document.querySelector('.show-me-button').onclick = function() {
    let hiddenBlock = document.querySelector('.product-hidden-block')
    if (hiddenBlock.style.display === "none") {
        hiddenBlock.style.display = "block";
    } else {
        hiddenBlock.style.display = "none";
    }
}