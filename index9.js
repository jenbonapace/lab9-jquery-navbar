$("li").hover(function() {
    $(this).fadeTo(125, 0.25);
});

$("li").mouseleave(function() {
    $(this).fadeTo(125, 100);
});

$("li").click(function() {
    $(this).text("ClicK")
      $(this).css("background-color", "#FFFF00");
});
