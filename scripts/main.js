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