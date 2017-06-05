$("#navbarToggle").blur(function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $("#js-navbar-collapse").collapse('hide');
    }
});