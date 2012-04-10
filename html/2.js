$(function() {
    // text
    $("p#text button").click(function() {
	$("p#text").text("hello, world!");
    });

    // html
    $("p#html button").click(function() {
	$("p#html").html("<p><b>hello, world!</p></b>");
    });

    // prepend
    $("p#prepend button").click(function() {
	$("p#prepend").prepend("<b>hello, world!</b>");
    });

    // append
    $("p#append button").click(function() {
	$("p#append").append("<b>hello, world!</b>");
    });

    // before
    $("p#before button").click(function() {
	$("p#before").before("<b>hello, world!</b>");
    });

    // after
    $("p#after button").click(function() {
	$("p#after").after("<b>hello, world!</b>");
    });

    // prependTo
    $("p#prependTo button").click(function() {
	$("p#prependThis").prependTo("p#prependHere");
    });

    // appendTo
    $("p#appendTo button").click(function() {
	$("p#appendTo").appendTo("p#appendHere");
    });

    // insertBefore
    $("p#insertBefore button").click(function() {
	$("p#insertThis").insertBefore("p#insertBeforeHere");
    });

    // insertAfter
    $("p#insertAfter button").click(function() {
	$("p#insertThis").insertAfter("p#insertAfterHere");
    });

    // wrap
    $("p#wrap button").click(function() {
	$("p#wrap").wrap("<blockquote></blockquote>");
    });

    // wrapAll
    $("p#wrapAll button").click(function() {
	$("p#wrapAll").wrapAll("<blockquote></blockquote>");
    });

    // wrapInner
    $("p#wrapInner button").click(function() {
	$("p#wrapInner").wrapInner("<blockquote></blockquote>");
    });

    // replaceWith
    $("p#replaceWith button").click(function() {
	$("p#replaceWith").replaceWith("<b>hello, world!</b>");
    });

    // remove
    $("p#remove button").click(function() {
	$("p#remove button").remove();
    });

    // attr
    $("p#attr button").click(function() {
	$("p#attr button").attr("disabled", "disabled");
    });

    // removeAttr
    $("p#removeAttr button").click(function() {
	$("p#attr button").removeAttr("disabled");
    });

    // addClass
    // removeClass
    // css
    // val
});
