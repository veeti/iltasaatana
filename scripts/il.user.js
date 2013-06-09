// ==UserScript==
//
// @name Ilta-Saatana Iltalehdelle
// @description Saatana!
// @version 1.0
//
// @match http://*.iltalehti.fi/*
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
			var number = $(".nro", this).clone();
			$(".nro", this).remove();

			var time = $(".aika", this).clone();
			$(".aika", this).remove();

			var date = $(".date", this).clone();
			$(".date", this).remove();

			var section = $(".osasto", this).clone();
			$(".osasto", this).remove();

			$(this).text("\n " + satanify($(this).text()) + " \n");

			$(this).prepend(number);
			$(this).append(section);
			$(this).append(time);
			$(this).append(date);

			$(this).addClass("saatana");
		});
	};

	// headings
	$("h1.juttuotsikko span.otsikko:last-of-type").satanify();

	// left
	$("#container_vasen p a:not(.palstakuva)").satanifySidebar();

	// right
	$("#container_oikea [class$=link-list] p a:not(.palstakuva)").satanifySidebar();

	// footer
	$(".footer_luetuimmat_container .list-title").satanify();

});
