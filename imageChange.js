
// this is our funciton
function imageLoader(){
    const image = document.querySelector('img');

    if (window.innerWidth >= 700) {
        image.src = 'images/image-product-desktop.jpg';
    } else {
        image.src = 'images/image-product-mobile.jpg';
    }
}

// to load the image on initial viewport

window.addEventListener('load', imageLoader);


// to change the image based on the screen size

window.addEventListener('resize', imageLoader);