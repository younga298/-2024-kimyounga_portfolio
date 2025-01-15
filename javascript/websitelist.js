
$(window).scroll(() => {
    let ws = $(this).scrollTop();
    let fixWrap = $('.website-list').offset().top;
    let move = ws - fixWrap;
    let end = $('.lists').width() - $(window).innerWidth();


    if (ws > fixWrap && ws < fixWrap + end) {
        $('.lists').css('transform', `translateX(-${move}px)`);
    } else if (ws >= fixWrap + end) {
        $('.lists').css('transform', `translateX(-${end}px`);
    }
})

setTimeout(() => {
    $('#website-list').css("display", "block");
}, 5500)

setTimeout(() => {
    $('.website-list')
        .css({

            borderRadius: '0px',
            backgroundColor: "white",
            opacity: '0',

        })
        .animate({
            marginTop: 0,
            borderRadius: '0px',
            opacity: '1',
            width: '80%'

        }, {
            duration: 200,
            easing: 'swing',
            queue: false,
            width: '79.98%'
        })

}, 5500);

