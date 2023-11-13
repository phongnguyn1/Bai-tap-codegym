let imgObj = null;
imgObj = document.getElementById('Image');
function init() {
    imgObj = document.getElementById('Image');
    imgObj.style.position = 'giu';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;
