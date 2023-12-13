var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("AniversárioImage.png", function(Img) {
blockImageObject = Img;
blockImageObject.scaleToWidth(700);
blockImageObject.scaleToHeigth(510);
blockImageObject.set({
top:0,
Left:0
});
canvas.add(blockImageObject)
})

function playSound(){
    x.play();
}
