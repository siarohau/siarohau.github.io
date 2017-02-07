var enableMouseTracking = true;
var startTime = 0;
var displayHeight;

var header;
var body;
var inHeader;
var inBody;

var dialog = '<div class="ff-content"><a href="#" class="ff-close-button simplemodal-close"><i class="fa fa-times fa-2x"></i></a>	<div class="ff-title-block"><div class="ff-title-image"><i class="fa fa-lightbulb-o fa-5x"></i></div><div class="ff-titles">	<div class="ff-first-title">ЗАКАЖИ ДОКУМЕНТЫ НА СОЦИАЛЬНУЮ КАРТУ И ПОЛУЧИ СКИДКУ 20 % УЖЕ СЕГОДНЯ!</div><br>	<div class="ff-second-title">Оставьте номер телефона и мы позвоним вам!</div></div>	</div>	<div class="ff-form-block"><div class="ff-form-image"><i class="fa fa-long-arrow-right fa-5x"></i></div>	<form method="post" class="ff-input-form" id="ff-form"><input type="text" class="ff-phone masked-phone" name="ff-phone" value="" placeholder="Введите ваш телефон"/><input class="btn ff-submit" value="ПОЛУЧИТЬ СОВЕТ" onClick="onSubmitFastScrollPopup()">	</form></div>	<div class="ff-benetifs-block"><div class="ff-benefits-image"><i class="fa fa-plus-square-o fa-5x"></i></div><div class="ff-benefits">	<span class="ff-benefits-title">Уникальная возможность экономить на проезде 68 000 рублей !</span>	<p> - 100% АНОНИМНОСТЬ И КОНФИДЕНЦИАЛЬНОСТЬ</p>	<p> - 100 % ПОЛУЧЕНИЕ КАРТЫ В МФЦ ИЛИ ВЕРНЕМ ДЕНЬГИ</p>	<p> - БЕСПЛАТНО ЗАМЕНА В СЛУЧАИ БЛОКИРОВКИ КАРТЫ</p>	</div>	</div>	<div class="ff-phone-block"><div class="ff-phone-image"><i class="fa fa-phone"></i></div><div class="ff-phones">	<div class="ff-phone-message">Работаем круглосуточно!</div>	<div class="ff-phone">8 (985) 238-62-57</div></div>	</div></div>';

$(document).ready(function()
{
	$('head').append('<link type="text/css" rel="stylesheet"  href="plg_fastScrollPopup/css/style.css" />');

	var body = document.body;
    var html = document.documentElement;

	displayHeight = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

	header = parseInt(0.1 * displayHeight, 10);
	body = parseInt(0.3 * displayHeight, 10);
	inHeader = false;
	inBody = false;

	document.body.addEventListener("mousemove", function(e) {
		if (!enableMouseTracking) {
			return;
		}

		if (e.pageY > body) {
			inHeader = false;
			inBody = false;
		 	startTime = Date.now();
		}
		else if ( (e.pageY <= body) && (e.pageY > header) && !inHeader && !inBody) {
			inHeader = false;
			inBody = true;
		}
		else if ( (e.pageY <= header) && !inHeader && inBody && (0 != startTime) ) {
			inHeader = true;
			inBody = true;

			if ((Date.now() - startTime) < 2000){
				 showDialog();
			}
		}
	});
});

function showDialog() {
	enableMouseTracking = false;
	$.modal(dialog, {
		overlayCss: { backgroundColor: "black",
					  opacity: 0.7 },
		containerCss: {
				background: "white",
				borderRadius: "20px",
				opacity: 0.9,
				width: "850px"
		},
		onClose: function (d) {
			enableMouseTracking = true;
			$.modal.close();
			return true;
		}
	});
	jQuery(function($) {
	    var el = $(".masked-phone")
	    if (el && el.mask) {
	        el.mask("9-999-999-99-9?9");
	    }
	});
}

function onSubmitFastScrollPopup() {
	$form = $($('#ff-form').first());
    var phone = $form.find('input[name=ff-phone]:first').val();

	sendOrder2(phone, "FastScrollForm", "", "");
	if (phone) {
		$.modal.close();
	}
}