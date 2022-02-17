function increase(){
    let image = document.getElementById('img');
    image.style.width = (image.width + 5) + "px";
    image.style.height = (image.height + 5) + "px"
   
}
function decrease(){
    let image = document.getElementById('img');
    image.style.width = (image.width - 5) + "px";
    image.style.height = (image.height - 5) + "px"

   
}