$(window).scroll(() => {
    let ws = $(this).scrollTop();
    let fixWrap = $('.website-list').offset().top;
    let move = ws - fixWrap;
    let end = $('.lists').width() - $(window).innerWidth();


    let rotation = (move % 360);

    if (ws > fixWrap && ws < fixWrap + end) {
        $('.lists').css('transform', `translateX(-${move}px)`);
    } else if (ws >= fixWrap + end) {
        $('.lists').css('transform', `translateX(-${end}px)`);
    }


    $('.menubar .point').css('transform', `rotate(${rotation}deg)`);
});