$(function() {

    var images = ['bg-1.png', 'bg-2.png', 'bg-3.png'];

    $('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before {background: url(../assets/img/background/' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');

    setTimeout(function() {
        $('.logoContainer').transition({
            scale: 1
        }, 700, 'ease');
        setTimeout(function() {
            $('.logoContainer .logo').addClass('loadIn');
            setTimeout(function() {
                $('.logoContainer .text').addClass('loadIn');
                setTimeout(function() {
                    $('.acceptContainer').transition({
                        height: '431.5px'
                    });
                    setTimeout(function() {
                        $('.acceptContainer').addClass('loadIn');
                        setTimeout(function() {
                            $('.formDiv, form h1').addClass('loadIn');
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 1000);
    }, 10);

});