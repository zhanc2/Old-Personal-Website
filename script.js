let slideIndexes = [1, 1, 1];

let sideBarState = false;

function openCloseSideBar() {
    let openSideBar = document.getElementById("open-sidebar-button");
    let rect = openSideBar.getBoundingClientRect();
    let triangle = document.getElementById("little-triangle-on-button");
    if (rect.left === 200) {
        triangle.style.transform = "rotate(0deg)";
        openSideBar.style.left = "0px";
        sideBarState = false;
        return;
    }
    if (rect.left === 0) {
        triangle.style.transform = "rotate(180deg)";
        openSideBar.style.left = "200px";
        sideBarState = true;
    }

}

function onStart() {
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);
}
function plusSlides(num, whichGallery) {
    showSlides(slideIndexes[whichGallery] += num, whichGallery);
}
function showSlides(num, whichGallery) {
    let i;
    let className = "gallery-slide-" + String(whichGallery+1);
    // className = "gallery-slide-1"
    // window.alert(className);
    let slides = document.getElementsByClassName(className);

    // window.alert(slides.length)

    if (num > slides.length) {
        slideIndexes[whichGallery] = 1;
    }
    if (num < 1) {
        slideIndexes[whichGallery] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // window.alert("is this working")
    // slides[slideIndexes[whichGallery] - 1].style.display = "inline-block";
    slides[slideIndexes[whichGallery]-1].style.display = "inline-block";
}