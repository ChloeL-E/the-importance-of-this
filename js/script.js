$('document').ready(function() {
    $('.box').on('click', function() {
        var classNames = $(this).attr('class').split(' ');
        $('.' + classNames[1]).css('background-color', 'red');
   })
}) /** when you click on a box with class it identifies all boxes with same clas using 'this' keyword and changes css to all */