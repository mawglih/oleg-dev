$("#navbarToggle").blur(function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $("#js-navbar-collapse").collapse('hide');
    }
});
$('#btn-main-hover').mouseenter(function(){
    $('.main-primary.bg-image > img').css('opacity', 0.75);
    $('#btn-main-hover').css('font-weight', 'bold');
    $('#btn-main-hover').css('color', 'white');
});
$('#btn-main-hover').mouseleave(function(){
    $('.main-primary.bg-image > img').css('opacity', 0.55);
    $('#btn-main-hover').css('font-weight', 'normal');
});
$('.main-secondary').mouseenter(function(){
    $('.main-secondary.bg-image > img').css('opacity', 0.75);
    $('.main-secondary').css('font-weight', 'bold');
    $('#body-sec>i').css('margin-right', '15px');
});
$('.main-secondary').mouseleave(function(){
    $('.main-secondary.bg-image > img').css('opacity', 0.55);
    $('.main-secondary').css('font-weight', 'normal');
    $('#body-sec>i').css('margin-right', '10px');
});
$('#footer-span2').mouseenter(function(){
    $('#check-hidden').css('visibility', 'visible');
});
$('#footer-span2').mouseleave(function(){
    $('#check-hidden').css('visibility', 'hidden');
});