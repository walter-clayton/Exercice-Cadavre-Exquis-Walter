
//Trying to display the image alt/caption on the html.
// tried using similar method as https://www.w3schools.com/howto/howto_css_modal_images.asp

var img = document.getElementById("img");
var captionText = document.getElementById("caption");

img.onclick = function(){
  img.style.display = "block";
  img.src = this.src;
  captionText.innerHTML = this.alt;
}