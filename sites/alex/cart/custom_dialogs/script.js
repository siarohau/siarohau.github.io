$(document).ready(function()
{
	$('head').append('<link type="text/css"rel="stylesheet" href="custom_dialogs/styles.css" />');
});

function onOrderFillDialogSubmited(){
   	app.sendOrder("feedback-form-fill-dialog", "Бесплатная консультация");
    //$.modal.close();
}

var customDialogManager  = (function () { 
    var dialogManager = {};
 	
 	dialogManager.showEmptyPhoneDialog = function() {
		var dialog = '<div class="popup-header error-popup-header">	<div class="popup-title"><h4 >Ваша заявка НЕ принята!</h4></div>	<div class="dialog-close-btn simplemodal-close"><a href="#"><i class="dialog-close-btn-image fa fa-times fa-2x"></i></a></div></div><div class="popup-body">	<p>Укажите Ваш номер телефона, чтобы мы могли с Вами связаться. Спасибо!</p></div>';
		$.modal.close();
		showCustomDialog(dialog, "600px", "150px");
	}

	dialogManager.showOrderAcceptedDialog = function(phone) {
		var dialog = '';
		if (phone) {
			dialog = '<div class="popup-header">	<div class="popup-title"><h4 >Ваша заявка принята!</h4></div>	<div class="dialog-close-btn simplemodal-close"><a href="#"><i class="dialog-close-btn-image fa fa-times fa-2x"></i></a></div></div><div class="popup-body">	<p>Спасибо! С Вами свяжутся в кратчайшие сроки</p><p class="phone-section">по тел. <span class="phone-number">{phone}</span></p></div>'
			.replace('{phone}', phone)
		} else {
			dialog = '<div class="popup-header">	<div class="popup-title"><h4 >Ваша заявка принята!</h4></div>	<div class="dialog-close-btn simplemodal-close"><a href="#"><i class="dialog-close-btn-image fa fa-times fa-2x"></i></a></div></div><div class="popup-body">	<p>Спасибо! С Вами свяжутся в кратчайшие сроки.</p></div>';
		}
		$.modal.close();
		showCustomDialog(dialog, "600px", "180px");
	}

	dialogManager.showOrderNotAcceptedDialog = function(phone) {
		var dialog = '<div class="popup-header error-popup-header">	<div class="popup-title"><h4 >Ваша заявка НЕ принята!</h4></div>	<div class="dialog-close-btn simplemodal-close"><a href="#"><i class="dialog-close-btn-image fa fa-times fa-2x"></i></a></div></div><div class="popup-body">	<p>Ошибка во время отправки заявки!<br> Свяжитесь с нами по телефону или электронной почте! Спасибо!</p></div>';
		$.modal.close();
		showCustomDialog(dialog, "600px", "160px");
	}

	dialogManager.showOrderFillDialog = function() {
		var dialog = '<div class="popup-header">	<div class="popup-title">		<h4>ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПО ПРОЕКТУ</h4>	</div>	<div class="dialog-close-btn simplemodal-close">		<a href="#"><i class="dialog-close-btn-image fa fa-times fa-2x"></i></a>	</div></div><div class="popup-body">	<p></p>	<form class="feedback-form-fill-order" method="POST" id="feedback-form-fill-dialog">		<div class="form-group">			<label for="phone" class="popup-row-label" style="text-align:left">Оставьте Ваш номер телефона:</label>			<input class="popup-row-input masked-phone" type="text" name="phone" required>		</div>	</form></div><div class="popup-footer">	<input class="submit-button" name="sendNamePhone" value="ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ" onClick="onOrderFillDialogSubmited()"></div>';
		$.modal.close();
		showCustomDialog(dialog, "600px");
		var el = $(".masked-phone")
		if (el && el.mask) {
		    el.mask("9-999-999-99-9?9");
		}
	}

    function showCustomDialog(dialogHtml, minWidth, minHeight) {
		$.modal(dialogHtml, {
			overlayCss: { backgroundColor: "black",
						  opacity: 0.7 },
			containerCss: {
					background: "white",
					opacity: 0.9,
					minWidth: minWidth,
					minHeight: minHeight	
			},
			onClose: function (d) {
				$.modal.close();
				return true;
			}
		});
	}

    return dialogManager; 
}());