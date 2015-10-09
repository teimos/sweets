$(function(){
    var x = null;

    $('.products__item').hover(function(){
        $('.consist').hide();
        $('.consist', this).show();
        if (x) clearTimeout(x);
    }, function(){
        var self = $(this);
        x = setTimeout(function(){
            $('.consist', self).hide();
        }, 1000);
    });
});