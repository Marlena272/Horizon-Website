const images = ['graphics/horizon_1.jpg', 'graphics/horizon_2.jpg', 'graphics/horizon_3.jpg', 'graphics/horizon_4.jpg', 'graphics/horizon_5.jpg', 'graphics/horizon_6.jpg', 'graphics/horizon_7.jpg'];
const sliderImg = document.querySelector('.sliderImg');
let activeElement = 0;

function changeElement() {
    activeElement++;
    if (activeElement == images.length)
        activeElement = 0;
    sliderImg.src = images[activeElement]

}
setInterval(changeElement, 5000)


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "Zdjęcie %1 z %2"
})