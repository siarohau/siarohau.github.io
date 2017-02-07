function sendOrderCore(phone, formName, name, theme, successCallback, failedCallback){ 
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

    if ((phone.length > 0) && (name.length > 0))
    {
        $.ajax({
            type: 'POST',
            url: '/plg_orderSender/sendOrder.php',
			data: { phone: phone, name: name, theme: theme },
            success: function(data) {
                    if(data === "true" && successCallback) {
                        successCallback();
					}
                    else {
                        if (failedCallback) {
                            failedCallback();
                        }
                    }
                }
        });
    }
}