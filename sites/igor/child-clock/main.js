$(document).ready(function(){

	//POPUP
	$('a.call').click(function(e){
		e.preventDefault();
		$('.overlay,.popup').fadeIn('fast');
	});
	$('.overlay,.close_order').click(function(e){
		e.preventDefault();
		$('.overlay,.popup,.popup-send').fadeOut('fast');
	});
/*
	$('.rel').click(function(){
		rel = $(this).attr('rel');
		$('#tema').attr('rel',rel);
	});
*/
	$('.tema').click(function(e){
		rel = $(this).attr('rel');
		$('#tema').attr('value',rel);
	});








	//PHONE MASK
	$("input[name=phone]").mask("+7(999)999-99-99");




	//Валидация
	function simpleValidator(formClass,ajaxSendForm){
		var orderForm = $(formClass),
			clientName  = orderForm.find("input[name=name]"),
			clientPhone = orderForm.find("input[name=phone]"),
			clientNameVal  = orderForm.find("input[name=name]").val(),
			clientPhoneVal = orderForm.find("input[name=phone]").val();
			clientPhoneMaskVal = clientPhoneVal.replace(/\D+/g, '');

			// console.log(clientPhoneMaskVal);
			if(ajaxSendForm == true){
				//nothing


			}
			// var clientNameMaskVal;
			// var clientNameMaskTrue == false;
			// if (clientNameVal.match(/[\w]/g)) {
			//        clientNameMaskVal = clientNameVal.replace(/[\w]/g, '');
			// }
			// if(clientName != clientNameMaskVal){
			// 	clientName.addClass("error-input-valid").removeClass("success-input-valid");
			// 	console.log("da");
			// 	clientNameMaskTrue = true;
			// }




		if(clientNameVal != null){

			if(clientNameVal.length < 2 || clientNameVal.length > 26){
				clientName.addClass("error-input-valid").removeClass("success-input-valid");
			}else{
				clientName.removeClass("error-input-valid").addClass("success-input-valid");
			}

		}else{
			clientName.addClass("error-input-valid").removeClass("success-input-valid");
		}

		if(clientPhoneMaskVal != null){
			if(clientPhoneMaskVal.length <= 10 || clientPhoneMaskVal.length > 26){
				clientPhone.addClass("error-input-valid").removeClass("success-input-valid");
			}else{
				clientPhone.removeClass("error-input-valid").addClass("success-input-valid");
			}
		}else{
			clientPhone.addClass("error-input-valid").removeClass("success-input-valid");
		}

	}

	//Вызов валидации
	$('.last-clock-form input[type=text]').bind("change keyup keydown click input blur",function(){
		simpleValidator(".last-clock-form",false);
	});

	$('.clock-form input[type=text]').bind("change keyup keydown click input blur",function(){
		simpleValidator(".clock-form",false);
	});





		//AJAX
		$(".last-clock-form input[type=button]").on("click",function(e){
			//Вызов валидации
			simpleValidator(".last-clock-form",true);

			var my_form = $(this).parents("form");

						if($(my_form)[0].checkValidity() && (my_form.find(".error-input-valid").length == null || (my_form.find(".error-input-valid").length == NaN || (my_form.find(".error-input-valid").length == 0)))){
							console.log("OK send form");

							//AJAX SUBMIT
							var order_name = my_form.find("input[name=name]").val();
							var order_tel = my_form.find("input[name=phone]").val();
							// $("#products .product_title").text();


							// console.log(order_name);
							// console.log(order_tel);

							$.ajax({
								url:"/order.php",
								method:"POST",
								// type:"POST",
								data:my_form.serialize(),
								success:function(data){
									console.log(data);
									var data = data;
									if(data == 1){

										//Сообщение
										swal({
										  title: "Спасибо!<br>Ваша заявка отправлена.<br>В ближайшее время мы с Вами свяжемся!",
										  type: "success",
										  confirmButtonText: "Ок",
										  html: true,
										  // confirmButtonColor: "rgb(255, 242, 38)",
										});

									}else{
										// nothing

									}
								}
							});


							//Сброс
							my_form[0].reset();
							my_form.find("input[type=text]").removeClass("error-input-valid").removeClass("success-input-valid");

							//ADD CLASS FOR CLOSE MODAL
							//$.arcticmodal('close');

					}else{
						// console.log("invalid form");
						// my_form[0].reportValidity();
						var errorName = my_form.find(".error-input-valid[name=name]").attr("runame");
						if(errorName == null){
							errorName = "";
						}else{
							errorName = "Поле <b>«"+errorName+"»</b> должно быть заполнено правильно.";
						}
						var errorPhone = my_form.find(".error-input-valid[name=phone]").attr("runame");
						if(errorPhone == null){
							errorPhone = "";
						}else{
							errorPhone = "Поле <b>«"+errorPhone+"»</b> должно содержать правильный номер телефона.";
						}
console.log("da");
						errorMessage = errorName +"<br>"+ errorPhone;
						swal({
						  title: "Неправильно заполнены поля:",
						  text: errorMessage,
						  type: "error",
						  confirmButtonText: "Ок",
						  html:true,
						  // confirmButtonColor: "rgb(255, 242, 38)",
						});

					}


			e.preventDefault();


		});








	$("a.call").on("click",function(){
		product_name = $(this).parents(".product").find(".product_title").text();
		product_price_new =$(this).parents(".product").find(".price .new_price").text();
		product_price_old =$(this).parents(".product").find(".price .old_price").text();

		// console.log(product_name);
		// console.log(product_price_old);
		// console.log(product_price_new);
	});





		//AJAX
		$(".clock-form input[type=button]").on("click",function(e){
			//Вызов валидации
			simpleValidator(".clock-form",true);

			var my_form = $(this).parents("form");

						if($(my_form)[0].checkValidity() && my_form.find(".error-input-valid").length == null || (my_form.find(".error-input-valid").length == NaN || (my_form.find(".error-input-valid").length == 0))){
							console.log("OK send form");

							//AJAX SUBMIT
							var order_name = my_form.find("input[name=name]").val();
							var order_tel = my_form.find("input[name=phone]").val();

							var extra_product_option = {
												order_price_new: product_price_new,
												order_price_old: product_price_old,
												order_name: product_name
							};
							// console.log(order_name);
							// console.log(order_tel);

							$.ajax({
								url:"/order.php",
								method:"POST",
								// type:"POST",
								data:my_form.serialize()+'&'+$.param(extra_product_option),
								success:function(data){
									console.log(data);
									var data = data;
									if(data == 1){

										//Сообщение
										swal({
										  title: "Спасибо!<br>Ваша заявка отправлена.<br>В ближайшее время мы с Вами свяжемся!",
										  type: "success",
										  confirmButtonText: "Ок",
										  html:true,
										  // confirmButtonColor: "rgb(255, 242, 38)",
										});

									}else{
										// nothing

									}
								}
							});



							//Сброс
							my_form[0].reset();
							my_form.find("input[type=text]").removeClass("error-input-valid").removeClass("success-input-valid");

							//ADD CLASS FOR CLOSE MODAL
							$('.overlay,.popup,.popup-send').fadeOut('fast');


					}else{
						// console.log("invalid form");
						// my_form[0].reportValidity();
						var errorName = my_form.find(".error-input-valid[name=name]").attr("runame");
						if(errorName == null){
							errorName = "";
						}else{
							errorName = "Поле <b>«"+errorName+"»</b> должно быть заполнено правильно.";
						}

						var errorPhone = my_form.find(".error-input-valid[name=phone]").attr("runame");
						if(errorPhone == null){
							errorPhone = "";
						}else{
							errorPhone = "Поле <b>«"+errorPhone+"»</b> должно содержать правильный номер телефона.";
						}
						errorMessage = errorName +"<br>"+ errorPhone;
						swal({
						  title: "Неправильно заполнены поля:",
						  text: errorMessage,
						  type: "error",
						  confirmButtonText: "Ок",
						  html:true,
						  // confirmButtonColor: "rgb(255, 242, 38)",
						});

					}


			e.preventDefault();


		});















});
