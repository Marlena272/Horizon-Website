$('#navAboutTheGame').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#AboutTheGame').offset().top
    })
})

$(document).on('scroll', function () {
    if ($(window).scrollTop() > 40) {
        $("nav").css("position", "fixed");
        $("nav").css("height", "30px");
        $("nav").css("line-height", "30px");
        $("nav").css("opacity", "50%");
    } else {
        $("nav").css("position", "absolute");
        $("nav").css("height", "40px");
        $("nav").css("line-height", "40px");
        $("nav").css("opacity", "70%");
    }

})

$('.navigationList a').on("click", function () {
    const downloadId = $(this).attr('id');
    const lengthString = downloadId.length;
    const goToSection = "#" + downloadId.slice(3, lengthString)
    console.log(goToSection);

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

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