function customButton(){
    let background = document.getElementById('bc').value
    document.getElementById('custom').style.backgroundColor = background;

    let colors = document.getElementById('fc').value
    document.getElementById('custom').style.color = colors;

    let font = document.getElementById('fcpx').value
    document.getElementById('custom').style.font = font + 'px';
    
    let weight = document.getElementById('fw').value
    document.getElementById('custom').style.fontWeight = weight;

    let paddings = document.getElementById('ppx').value
    document.getElementById('custom').style.padding = paddings + 'px';

    let radius = document.getElementById('br').value
    document.getElementById('custom').style.borderRadius = radius + 'px';

    document.getElementById('custom').style.visibility = 'visible'


}