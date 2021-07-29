img="";
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    }
    function preload(){
        img=loadImage("dog_cat.jpg");
    }
    function draw(){
        image(img,0,0,640,420);
        fill("#ff0000");
        text("dog",45,75);
        noFill();
        stroke("#ff0000");
        rect(30,60,400,300);

      fill("#ff0000");
      text("cat",280,100);
      noFill();
      stroke("#ff0000");
      rect(275,80,300,350);
    }