
function init() {
    
    /* TOOTIPS */
    $('.trigger1').tooltip();
    $('.trigger2').tooltip({
        tip:'#single_tip'
    });
    
    
    $('.toggle1').click(function(){
        $(this).parent().find('.display_area').toggle();
        var major_block = $(this).parent();
        var thetop = $('#title');
        // toggle all off first
        thetop.after($(this).parent());
    });
    
}

function showSomething() {
    //$('body').css('background-image','url("2.jpg")');
}

function onHide() {
    //$('body').css('background-image','url("1.jpg")');
}
