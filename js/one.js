
function init() {
    
    /* TOOTIPS */
    $('.trigger1').tooltip();
    $('.trigger2').tooltip({
        tip:'#single_tip'
    });
    
    // major block show
    $('.toggle1 span').click(function(){
        
        $('.display_area').hide('fast');
        $(this).parent().parent().find('.display_area').toggle();
    });
    $('.toggle1 div').click(function(){
        $(this).parent().parent().find('.display_area').toggle();
     });
    
    // initalize block 4, move tips
    //
    $('.trigger3').tooltip({
        tip:'#single_tip2'
    });
    $('#block4_append').click(function(){
        $('#majorbock_4').find('#single_tip2').prependTo("body").show();

    });

}

function showSomething() {
    //$('body').css('background-image','url("2.jpg")');
}

function onHide() {
    //$('body').css('background-image','url("1.jpg")');
}
