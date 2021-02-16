$(document).ready(function () { // Start Coding Here

    // Tabs

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#home , #who , #models, #videos , #contact , #client , #book").hide();
        $('.tabs li').removeClass('active');
        $("#" + tab).show();
        $(this).addClass('active');
    });

    // Mini

    $(".list").click(function () {
        $(".tabs").toggleClass("mini");
    });

    // FocusOut

    $(".container8 input[type=text], textarea").focusout(function () {
        $(this).css("border", "1px solid red");
        $(this).css("background-color", "white");
    });

}); // End Code