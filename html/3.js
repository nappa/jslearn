$(function() {
    var shown = true;
    $("#show button").click(function() {
	if (shown) {
	    $("#show p").hide("slow");
	    $("#show button").text("show");
	    shown = false;
	} else {
	    $("#show p").show("slow");
	    $("#show button").text("hide");
	    shown = true;
	}
    });

    var slideUp = false;
    $("#slide button").click(function() {
	if (slideUp) {
	    $("#slide p").slideDown("slow");
	    $("#slide button").text("slide Up");
	    slideUp = false;
	} else {
	    $("#slide p").slideUp("slow");
	    $("#slide button").text("slide Down");
	    slideUp = true;
	}
    });

    var fadeOut = false;
    $("#fade button").click(function() {
	if (fadeOut) {
	    $("#fade p").fadeIn("slow");
	    $("#fade button").text("fade out");
	    fadeOut = false;
	} else {
	    $("#fade p").fadeOut("slow");
	    $("#fade button").text("fade in");
	    fadeOut = true;
	}
    });

});
