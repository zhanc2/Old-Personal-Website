

function openCloseSideBar() {
    let openSideBar = document.getElementById("open-sidebar-button");
    let rect = openSideBar.getBoundingClientRect();
    let triangle = document.getElementById("little-triangle-on-button");
    if (rect.left === 200) {
        triangle.style.transform = "rotate(0deg)";
        openSideBar.style.left = "0px";
        return;
    }
    if (rect.left === 0) {
        triangle.style.transform = "rotate(180deg)";
        openSideBar.style.left = "200px";
    }

}