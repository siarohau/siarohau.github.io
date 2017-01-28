var actionEndString = '';
var ActionMode = {
  EndOfMonth: 'EndOfMonth',
  EndOfDay:  'EndOfDay'
};

var MonthMap = {
	0: 'января',
	1: 'февраля',
	2: 'марта',
	3: 'апреля',
	4: 'мая',
	5: 'июня',
	6: 'июля',
	7: 'августа',
	8: 'сентября',
	9: 'октября',
	10: 'ноября',
	11: 'декабря'
}

$(document).ready(function()
{
	    var actionEndMode = ActionMode.EndOfMonth;
	    //var actionEndMode = ActionMode.EndOfMonth;

		var clock = $('.clock').FlipClock({
			clockFace: 'DailyCounter',
			autoStart: false,
			language: 'russian',
			callbacks: {
				stop: function() {
					var stopTime = calcActionEndTime(actionEndMode);
					clock.setTime(stopTime.SecTillEnd);
					updateDate(stopTime.DisplayDate);
					clock.start();
					//$('.message').html('Акция закончилась!')
				}
			}
		});

		var stopTime = calcActionEndTime(actionEndMode);

		updateDate(stopTime.DisplayDate);
		console.log("stopTime.DisplayDate",stopTime.DisplayDate);
		clock.setTime(stopTime.SecTillEnd);
		clock.setCountdown(true);
		clock.start();
});

function calcActionEndTime(actionMode) {
	var currentTime = new Date();

	var nextDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);
	var nextMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 1);
	var periodMonth  = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 30);

	var stopTime = periodMonth;

	var displayString = "завтра";

	if (actionMode == ActionMode.EndOfDay) {
		timeTillStop = nextDay;
		displayString = (currentTime.getDate()) + ' ' + MonthMap[currentTime.getMonth()];
	} else {
		timeTillStop = nextMonth;
		var d = new Date(nextMonth);
 		d.setDate(d.getDate()-1);
		displayString = (d.getDate()) + ' ' + MonthMap[d.getMonth()];
	}
	return {SecTillEnd: (stopTime - currentTime) / 1000, DisplayDate: displayString};
}

function updateDate(displayDate) {
	var el = $('.end-date-string');
	if (el) {
		el.text(displayDate);
	}
}