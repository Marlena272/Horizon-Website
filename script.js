$('#navAboutTheGame').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#AboutTheGame').offset().top
    })
})

$(document).on('scroll', function () {
    if ($(window).scrollTop() > 30) {
        $("nav").css("position", "fixed");
        $("nav").css("opacity", "90%");
    } else {
        $("nav").css("position", "absolute");
        $("nav").css("opacity", "60%");
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

/*$(window).resize(function () {
    const downloadId = $('aboutTheGamePicture2');
    if (screen.width <= 1024) {
        downloadId.removeClass('aboutTheGamePicture2');
    }
});*/