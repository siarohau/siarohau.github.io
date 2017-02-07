$(function(){
	//global vars

	var $html = $("html, body");
	var mainScroll = false;
	var ajaxPath = "ajax/ajax.php"




/*
######################################################################
ContactForm
######################################################################
*/
	var submitContactForm = function(event){
		var $this = $("#" + event.data.id).addClass("loading");
		var $items = $this.find("input, textarea").removeClass("error");
		var $success = $("#success");
		var error = false;

		$items.each(function(i, el){
			var $nextElement = $(el);
			if($nextElement.data("required") == "Y"){
				if($nextElement.val() == ""){
					$this.removeClass("loading");
					$nextElement.addClass("error");
					error = true;
				}
			}
		});

		if(error === false){
			$.get(ajaxPath + "?act=contactForm&" + $this.serialize(), function(httpData){

				if(httpData != 1){
					$this.addClass("error");
				}else{
					$this[0].reset();
					$success.addClass("opened");
				}

				$this.removeClass("loading");

			});
		}

		return event.preventDefault();
	};

	var sendContactForm = function(event){
		$this = $(this);
		submitContactForm(event);
		return event.preventDefault();
	};

	//global functions
	var	 changePriceTab = function (event){

		//jquery vars
		var $this = $(this);
		var $parentWhis = $(this).parent();

		var $tabs = $("#price .priceTabs .tab");
		var $tabsSelectors = $("#price .tabSelector");

		if($parentWhis.hasClass("selected")){
			return false;
		}

		//native vars
		var _currentTabEq = $parentWhis.index();

		//remove selected
		$tabs.removeClass("selected");
		$tabsSelectors.removeClass("selected");

		//add selected
		$parentWhis.addClass("selected");
		$tabs.eq(_currentTabEq).addClass("selected");

		// $tabs.eq(_currentTabEq).find(".detailPriceSlider").find(".pager li:first-child").trigger("click");
		var $priceCarouselNative = $tabs.eq(_currentTabEq).find(".priceCarousel");
		var popIndex = $priceCarouselNative.find(".popular").index();
		$tabs.eq(_currentTabEq).find(".detailPriceSlider").find(".pager li").eq(popIndex).trigger("click");
		console.log("Меняем");
		return event.preventDefault();

	}

	var selectActivePrice = function(event){
		var $this = $(this);
		var $parentThis = $this.parents(".priceItem");
		var $parentThisTab = $parentThis.parents(".tab");

		$parentThis.siblings(".priceItem").removeClass("popular");
		$parentThis.addClass("popular");
		$parentThisTab.find(".pager li").eq($parentThis.index()).trigger("click");

		var priceInfoOffetTop = $parentThisTab.find(".detailPriceInformation").offset().top;
		$("html, body").animate({
			scrollTop: priceInfoOffetTop - 300
		}, 550);

		return event.preventDefault();
	};

	//#advantagesRightSlider functions

	var changeActiveSlide = function(event){

		var $this = $(this);
		var $parentWhis = $this.parent();
		var $advantagesRightSlider = $("#advantagesRightSlider");
		var $advantagesRightSliderOlItems = $advantagesRightSlider.find(".pager li");
		// var $advantagesListItems = $("#advantages .advantagesListItem").removeClass("selected");

		var activeIndex = $parentWhis.index();

		$advantagesRightSliderOlItems.eq(activeIndex).trigger("click");
		// $parentWhis.addClass("selected");

		return event.preventDefault();
	};

	var changeActiveSlideByPager = function(event){

		var $this = $(this);
		var $advantagesListItems = $("#advantages .advantagesListItem").removeClass("selected");

		var activeIndex = $this.index();

		$advantagesListItems.eq(activeIndex).addClass("selected");

		return event.preventDefault();

	}

	var changeStepsSliderActiveSlide = function(event){

		var $this = $(this);
		var $parentWhis = $this.parent();
		var $stepsListItems = $("#steps .stepsSliderListItem").removeClass("selected");
		var $stepsSliderPagerItems = $("#steps .pager li");

		var activeIndex = $parentWhis.index();

		$stepsListItems.eq(activeIndex).addClass("selected");
		$stepsSliderPagerItems.eq(activeIndex).trigger("click");

		return event.preventDefault();

	}

	var mainScrollToTree = function(event){

		var $tree = $("#tree")

		$html.stop().animate({
			scrollTop: $tree.offset().top
		}, {
			duration: 1050
		});

		return event.preventDefault();
	}

	var mainScrollStart = function(event){
		if(mainScroll == false && event.pageY > 0){
			mainScroll = mainScrollToTree(event);
		}
	};

	var mainBodyScroll = function(event){

		var windowHeight = $(window).height();
		var loadingElements = {
			"#tree": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#tree .treeListLeftItem:nth-child(1)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListLeftItem:nth-child(2)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListLeftItem:nth-child(3)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListLeftItem:nth-child(4)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListLeftItem:nth-child(5)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListRightItem:nth-child(1)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListRightItem:nth-child(2)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListRightItem:nth-child(3)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListRightItem:nth-child(4)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeListRightItem:nth-child(5)": {
				position: 0,
				loaded: false,
				interval: 100,
			},
			"#tree .treeOrderSite": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#efficiency": {
				position: 0,
				loaded: false,
				interval: 550,
			},
			"#advantages": {
				position: 0,
				loaded: false,
				interval: 670,
			},
			"#advantages .advantagesContainer": {
				position: 0,
				loaded: false,
				interval: 350,
			},
			"#marketingAnalysis": {
				position: 0,
				loaded: false,
				interval: 90,
			},
			"#price": {
				position: 0,
				loaded: false,
				interval: 400,
			},
			"#price .priceTabSelectors": {
				position: 0,
				loaded: false,
				interval: 400,
			},
			"#priceCarousel1": {
				position: 0,
				loaded: false,
				interval: 300,
			},
			"#price .detailPriceInformation": {
				position: 0,
				loaded: false,
				interval: 200,
			},
			"#gift": {
				position: 0,
				loaded: false,
				interval: 200,
			},
			"#trust": {
				position: 0,
				loaded: false,
				interval: 600,
			},
			"#workAll": {
				position: 0,
				loaded: false,
				interval: 350,
			},
			"#steps": {
				position: 0,
				loaded: false,
				interval: 650,
			},
			"#steps .stepsSliderList": {
				position: 0,
				loaded: false,
				interval: 150,
			},
			"#portfolio": {
				position: 0,
				loaded: false,
				interval: 350,
			},
			"#hard": {
				position: 0,
				loaded: false,
				interval: 700,
			},
			"#callbackFooter": {
				position: 0,
				loaded: false,
				interval: 700,
			},
		};

		$.each(loadingElements, function(id, nextElement){
			var $nextElement = $(id);
			loadingElements[id].position = $nextElement.offset().top - windowHeight;
		});

		if(event.currentTarget.scrollY > 0){
			$.each(loadingElements, function(id, nextElement){
				if(event.currentTarget.scrollY > loadingElements[id].position + loadingElements[id].interval){
					$(id).addClass("loaded");
				}
			});
		}

	};

	var openCallback = function(event){
		$("#callback").addClass("opened");
		$("#callbackForm")[0].reset();
		return event.preventDefault();
	};

	var closeCallback = function(event){
		$("#callback").removeClass("opened");
		return event.preventDefault();
	}





/*
######################################################################
CallbackForm
######################################################################
*/
	var submitCallback = function(event){

		var $callback = $("#callback").removeClass("error");
		var $this = $callback.find("#callbackForm").addClass("loading");
		var $items = $this.find("input, textarea").removeClass("error");
		var $success = $("#success");
		var error = false;

		$items.each(function(i, el){
			var $nextElement = $(el);
			if($nextElement.data("required") == "Y"){
				if($nextElement.val() == ""){
					$this.removeClass("loading");
					$nextElement.addClass("error");
					error = true;
				}
			}
		});

		if(error === false){
			$.get(ajaxPath + "?act=callback&" + $this.serialize(), function(httpData){

				if(httpData != 1){
					$callback.addClass("error");
				}else{
					$callback.removeClass("opened");
					$success.addClass("opened");
				}

				$this.removeClass("loading");

			});
		}

		return event.preventDefault();
	};



/*
######################################################################
CallbackForm
######################################################################
*/
	var submitCallback = function(event){

		var $callback = $("#callback").removeClass("error");
		var $this = $callback.find("#callbackForm").addClass("loading");
		var $items = $this.find("input, textarea").removeClass("error");
		var $success = $("#success");
		var error = false;

		$items.each(function(i, el){
			var $nextElement = $(el);
			if($nextElement.data("required") == "Y"){
				if($nextElement.val() == ""){
					$this.removeClass("loading");
					$nextElement.addClass("error");
					error = true;
				}
			}
		});

		if(error === false){
			$.get(ajaxPath + "?act=callback&" + $this.serialize(), function(httpData){

				if(httpData != 1){
					$callback.addClass("error");
				}else{
					$callback.removeClass("opened");
					$success.addClass("opened");
				}

				$this.removeClass("loading");

			});
		}

		return event.preventDefault();
	};









	//callback

	$(document).on("click", ".advantagesRightItemButton", openCallback);
	$(document).on("click",  "#callbackForm .submit", submitCallback);
	$(document).on("submit", "#callbackForm", submitCallback);
	$(document).on("click", "#callbackExit", closeCallback);

	$(document).on("click", "#openCallback", openCallback);

	$(document).on("click", "#orderSite", openCallback);
	$(document).on("click", "#orderTree", openCallback);
	$(document).on("click", "#efficiencyOrder", openCallback);
	$(document).on("click", "#marketingOrder", openCallback);
	$(document).on("click", "#trustOrder", openCallback);
	$(document).on("click", "#trustOrder1366", openCallback);
	$(document).on("click", "#workAllOrder", openCallback);
	$(document).on("click", "#hardOrder", openCallback);
	$(document).on("click", "#fcbk", openCallback);
	$(document).on("click", "#fcbk2", openCallback);
	$(document).on("click", "#callback", closeCallback);
	$(document).on("click", "#callbackContainer", function(event){
		event.stopImmediatePropagation();
	});

	var openBuy = function(event){
		var $this = $(this);
		var $buy = $("#buy").addClass("opened");
		var $product = $buy.find(".product");
		var $productNone = $buy.find(".productNone");
		$productNone.attr("placeholder", $this.data("label"));
		$product.val($this.data("label"));
		$("#buyForm")[0].reset();
		return event.preventDefault();
	};

	var closeBuy = function(event){
		$("#buy").removeClass("opened");
		return event.preventDefault();
	}



/*
######################################################################
BuyForm
######################################################################
*/
	var submitBuy = function(event){

		var $buy = $("#buy").removeClass("error");
		var $this = $buy.find("#buyForm").addClass("loading");
		var $items = $this.find("input, textarea").removeClass("error");
		var $success = $("#success");
		var error = false;

		$items.each(function(i, el){
			var $nextElement = $(el);
			if($nextElement.data("required") == "Y"){
				if($nextElement.val() == ""){
					$this.removeClass("loading");
					$nextElement.addClass("error");
					error = true;
				}
			}
		});

		if(error === false){
			$.get(ajaxPath + "?act=buyForm&" + $this.serialize(), function(httpData){

				if(httpData != 1){
					$buy.addClass("error");
					console.log("Успешная отправка");
				}else{
					$buy.removeClass("opened");
					$success.addClass("opened");
					console.log("Ошибка данные пусты");
				}

				$this.removeClass("loading");

			});
		}

		return event.preventDefault();
	};

	var closeSuccess = function(event){
		$("#success").removeClass("opened");
		return event.preventDefault();
	}

	var setPriceHeight = function(event){
		var $priceCarousel = $(".detailPriceSlider");
		$priceCarousel.each(function(i, nextElement){
			var $nextElement = $(nextElement);
			var slideFirstHeight = $nextElement.find(".slideItem:first-child").height();
			slideFirstHeight = slideFirstHeight > 0 ? slideFirstHeight : 700;
			$nextElement.height(slideFirstHeight);

			var $priceCarouselNative = $(".priceCarousel").eq(i-1);
			var popIndex = $priceCarouselNative.find(".popular").index();
			$priceCarousel.find(".pager li").eq(popIndex).trigger("click");
		});
	};

	$(document).on("click",  "#buyForm .submit", submitBuy);
	$(document).on("submit", "#buyForm", submitBuy);
	$(document).on("click", "#buyExit", closeBuy);
	$(document).on("click", ".buy", openBuy);
	$(document).on("click", "#buy", closeBuy);
	$(document).on("click", "#buyContainer", function(event){
		event.stopImmediatePropagation();
	});

	$(document).on("click", "#success", closeSuccess);
	$(document).on("click", "#successExit", closeSuccess);
	$(document).on("click", "#success .close", closeSuccess);
	$(document).on("click", "#successContainer", function(event){
		event.stopImmediatePropagation();
	});

	$(document).on("submit", "#contactForm1", {id: "contactForm1"}, submitContactForm);
	$(document).on("click", "#contactForm1 .button.send", {id: "contactForm1"}, sendContactForm);

	//global events
	$(document).on("click", "#price .tabSelectorLink", changePriceTab);
	$(document).on("click", "#advantages .advantagesListItemLink", changeActiveSlide);
	$(document).on("click", "#advantagesRightSlider .pager li", changeActiveSlideByPager);
	$(document).on("click", "#steps .stepsSliderListItemLink", changeStepsSliderActiveSlide);
	$(document).on("click", "#mouseIcon .mouseIconLink", mainScrollToTree);
	$(document).on("click", "#price .serviceName, #price .serviceMore", selectActivePrice);
	$(window).on("load scroll", mainBodyScroll);
	$(window).on("load", setPriceHeight);
});