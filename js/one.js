
function init() {
    
    
    /* TOOTIPS */
    $('.trigger1').tooltip();
    $('.trigger2').tooltip({
        tip:'#single_tip'
    });
    
    // major block show
    $('.toggle1 .toggle_title').click(function(){
       
        $('.display_area').hide('fast');
        $(this).parent().parent().find('.display_area').toggle();
    });
    $('.toggle1 div').click(function(){
        $(this).parent().parent().find('.display_area').toggle();
     });
    
    // initalize block 4, move tips
    //
    $('.trigger3').tooltip({
        tip:'#single_tip2',
        //relative:true
    });
    $('#block4_append').click(function(){
        if (!$('body').children('#single_tip2').length) {
            $('#majorbock_4').find('#single_tip2').prependTo("body").show();
        }
    });
    
    // initalize block 5
    $('.trigger_smallhat').tooltip({
        tip:'#trigger_smallhat_hat',
        //relative:true
    });
    $('.trigger_mediumhat').tooltip({
        tip:'#trigger_mediumhat_hat',
        //relative:true
    });
    $('.trigger_bighat').tooltip({
        tip:'#trigger_bighat_hat',
        //relative:true
    });
    $('.trigger_dynamichat').tooltip({
        tip:'#trigger_bighat_hat'
        //relative:true
    }).dynamic();
    
    //5a
    $('.trigger_dynamic').tooltip({
        tip:'#tip_dynamic'
    }).dynamic();
    
    
    //block 6
    $('.ajax_text').tooltip({
        tip:'#ajax_tip',
        onBeforeShow: function(){async_create_tip('#ajax_text2','#ajax_tip',false)}
    }).dynamic();
    
    $('#ajax_text2').mouseenter(function(event){
        $(this).unbind('mouseenter');
        async_create_tip('#ajax_text2','#ajax_tip2',true);
    });
    
    //$('#ajax_text2').tooltip({
    //    tip:'#ajax_tip2',
    //    onBeforeShow: function(){async_create_tip('#ajax_tip2')}
    //}).dynamic();
    
    $('#hidden_js').hide();
    $('#hidden_js_a').click(function(event){
        $('#hidden_js').toggle(); 
    });
}

function async_create_tip(trigger,tooltip_id,initialize) {
    //alert(tooltip_id);
    
    var tooltip_obj = $(tooltip_id);     
    //trigger_obj.unbind('click');        

    //var term = trigger_obj.attr('rel');
    var text_url = 'http://0.0.0.0/tooltips/' + 'bigtext.html';
    
        $.ajax({ 
            url: text_url,
            error: function(data) {
                term_ajax_failure(data);
            },
            success: function(data) {
                term_ajax_success(data,trigger,tooltip_id,initialize);
            },
            complete: function(XMLHttpRequest) {
                term_complete(XMLHttpRequest);
            }
        });        
}

function term_complete(XMLHttpRequest) {
    
}

function term_ajax_success(data,trigger,tooltip_id,initialize) {
    $(tooltip_id +' .tipMid .hat_text').html(data);
    if (initialize) {
        $(trigger).tooltip({
            tip:tooltip_id,
        }).dynamic();
        $(trigger).trigger('mouseenter');
    }
}

function term_ajax_failure(XMLHttpRequest, textStatus, errorThrown) {
    
}

function showSomething() {
    //$('body').css('background-image','url("2.jpg")');
}

function onHide() {
    //$('body').css('background-image','url("1.jpg")');
}