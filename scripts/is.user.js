// ==UserScript==
//
// @name Ilta-Saatana Ilta-Sanomille
// @description Saatana!
// @version 1.0
//
// @match http://*.iltasanomat.fi/*
//
// @require http://code.jquery.com/jquery-2.0.2.min.js
// @require http://iltasaatana.veetipaananen.fi/scripts/satan.js
//
// ==/UserScript==

$(document).ready(function() {

	$.fn.satanify = function() {
		this.each(function() {
			$(this).text(satanify($(this).text()));
		});
	};
	
	$.fn.satanifySidebar = function() {
		this.each(function() {
			if ($(this).children().is("img:only-child, .still-image:only-child"))
				return;

			var numberbullet = $(".numberbullet", this).clone();
			$(".numberbullet", this).remove();
		   
			var timestamp = $(".time-stamp", this).clone();
			$(".time-stamp", this).remove();
			
			$(this).text(satanify($(this).text()) + "\n");
			
			$(this).prepend(numberbullet);
			$(this).append(timestamp);
		});
	};

	// headings
	$("h2 a, h3 a, a h2, a h3").satanify();
	
	// sidebar: most read & most commented
	$("[id^=mostRead_] li[id^=item_] a").satanifySidebar();
	$("div.most-commented-text").satanifySidebar();

	// ordinary sidebar & inline lists
	var ll_classes = [
		"ll-news",
		"ll-istv",
		"ll-entertainment",
		"ll-sports",
		"ll-digi",
		"ll-cars", 
		"ll-health",
		"ll-travel",
		"ll-living",
		"ll-family",
		"ll-fashion",
		"ll-food",
		"ll-liv",
	];

	for (var i = 0; i < ll_classes.length; i++) {
		$(".link-list." + ll_classes[i] + " li:not(.big-item) > a").satanifySidebar();
	}

	// big items
	$("li.big-item h4").satanify();

});
