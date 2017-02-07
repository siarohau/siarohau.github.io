
$(document).ready(function() {
    $(".request_callback .submit").click(function() {
        var a = $(this).closest('form');
        var x = true;
        a.find('input').each(function() {
            if ($(this).val() === '') {
                customDialogManager.showEmptyPhoneDialog();
                x = false;
                return false;
            }
        });
        if (x) a.submit();
        return false;
    });

    $('.request_callback').submit(function() {
        var msg = $(this).serialize();
        var phone = $(this).find('input[name=phone]:first').val();
        $.ajax({
            type: 'POST',
            url: 'confirm.php',
            data: msg,
            success: function(data) {
                if (data === 'OK') {
                    customDialogManager.showOrderAcceptedDialog(phone);
		            yaCounter28139742.reachGoal('ordersend', {userData: msg + ": succeeded"});
                }

            },
            error: function() {
                 customDialogManager.showOrderNotAcceptedDialog();
		         yaCounter28139742.reachGoal('ordersend', {userData: msg + ": failed"});
            }
        });
        return false;
    });

    $('.modal_wrapper').click(function() {
        $('body').removeClass('show_confirm');
    });
});


function sendOrder(formId, formName){
    $form = $($('#'+ formId).first());
    var phone = $form.find('input[name=phone]:first').val();
    var name = $form.find('input[name=name]:first').val();
    var theme = $form.find('input[name=theme]:first').val();

    if (!phone || phone == "") {
        phone = 'Телефон N\A';
    }
    if (!name || name == "") {
        name = 'Имя N\A';
    }
    if (!theme || theme == "") {
        theme = 'Тема N\A';
    }
    if (!formName || formName == ""){
        formName = 'Имя формы N\A';
    }

    sendOrderCoreWrapper(phone, formName, name, theme);
}

function sendOrder2(phone, formName, name, theme){
    sendOrderCoreWrapper(phone, formName, name, theme);
}

function validatePhone(phone) {
    if (!phone || phone=="" || phone=='Телефон N\A' || phone=='Телефон NA'){
        return false;
    }
    return true;
}

function sendOrderCoreWrapper(phone, formName, name, theme){

        var isPhoneValid = validatePhone(phone);
        if (!isPhoneValid) {
            customDialogManager.showEmptyPhoneDialog(phone);
            return;
        }

        sendOrderCore(phone, formName, name, theme,
                function(){
                    yaCounter28139742.reachGoal('ordersend', {userData: phone + ':' + formName + ':' + name + ':' + theme + ": succeeded"});
                    customDialogManager.showOrderAcceptedDialog(phone);
                    },
            function(){
                    yaCounter28139742.reachGoal('ordersend', {userData: phone + ':' + formName + ':' + name + ':' + theme + ": failed"});
                    customDialogManager.showOrderNotAcceptedDialog(phone);
            });
}




jQuery(function($) {
    var el = $(".masked-phone")
    if (el && el.mask) {
        el.mask("9-999-999-99-9?9");
    }
});