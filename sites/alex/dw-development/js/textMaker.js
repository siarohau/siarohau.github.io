$(function(){

	//alt
	var whiteCurrentTimeoutID;
	var delCurrentTimeoutID;
	var	getDefaultString;
	var	getSplitArrayText;
	var slideCurrentIndex;

	//options
	var __printNewCharInterval = 150;
	var __deleteNewCharInterval = 50;
	var __delayAfterPrintNewChar = 800;
	var __delayAfterPrintNewElement = 400;

	//global
	var $textContainer = $("#mainTextContainer");
	var $wrSlider = $textContainer.find("#wrSlider");
	var $wrSliderElements = $wrSlider.find(".item");
	var $wrSliderTextLabel = $("#wrSliderText");

	//functions
	
	var getRandomArbitrary = function(min, max) {
		return Math.random() * (max - min) + min;
	}

	var nextSlideItem = function(index){
		
		slideCurrentIndex = $wrSliderElements.length - 1 >= index ? index : 0;
		var $nextElement = $wrSliderElements.eq(slideCurrentIndex);
		
		getDefaultString = $nextElement.text();
		getSplitArrayText = getDefaultString.split("");

		$wrSliderTextLabel.empty();
		setTimeout(nextElementIter(0), __printNewCharInterval);
	}

	var deleteNextChar = function(index){
		$wrSliderTextLabel.text($wrSliderTextLabel.text().slice(0, -1));
	};

	var nextElementDeleteIter = function(iter){
		if(iter >= 0){
			deleteNextChar(iter);
			delCurrentTimeoutID = setTimeout(function(){ 
				nextElementDeleteIter(--iter);
			}, __deleteNewCharInterval);	
		}else{
			setTimeout(function(){
				nextSlideItem(++slideCurrentIndex)
			}, __delayAfterPrintNewElement);
		}
	};

	var writeNextChar = function(index){
		$wrSliderTextLabel.append(getSplitArrayText[index]);
	}

	var nextElementIter = function(iter){
		if(getSplitArrayText.length > iter){
			writeNextChar(iter);
			whiteCurrentTimeoutID = setTimeout(function(){ 
				nextElementIter(++iter);
			}, getRandomArbitrary(80, __printNewCharInterval));
		}else{
			delCurrentTimeoutID = setTimeout(function(){ 
				nextElementDeleteIter(--iter);
			}, __deleteNewCharInterval + __delayAfterPrintNewChar);
		}
	};

	//start
	if($wrSliderElements.length > 0){
		nextSlideItem(0);
	}
	
	//start
	// setTimeout(nextElementIter(0), __interval);
 
});

	// //clear 
	// $textElement.empty();

	//wrSliderTextLabel