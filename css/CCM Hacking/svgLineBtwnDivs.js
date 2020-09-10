function svgLbdOnresize() {
    var line = $('#line');
    var div1 = $('#one');
    var div2 = $('#two');

    var x1 = div1.offset().left + (div1.width() / 2);
    var y1 = div1.offset().top + (div1.height());
    var x2 = div2.offset().left + (div2.width() / 2);
    var y2 = div2.offset().top;

    line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);
}