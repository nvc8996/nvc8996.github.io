// Javascript file for challenging part
const containers = Array.from(document.getElementsByClassName('imgcontainer'));
const modal = document.getElementById('modal-plain');
const modalImage = document.getElementById('modal-img');
const closeButton = document.getElementById('close-btn');

containers.forEach(container => {
    container.onclick=  (e) => {
        modal.style.display = 'block';
        modalImage.src = e.target.src;
    };
});

closeButton.onclick = () => {
    modal.style.display = 'none';
}

modal.onclick = (e) => {
    if (e.target === modalImage) {
        return;
    }
    modal.style.display = 'none';
}