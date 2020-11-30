var HTMLcanvas = document.getElementById("my-canvas");
var HTMLcontext = HTMLcanvas.getContext("2d");
var yoff = 0.0;
let mic;

function preload() {
  myFont = loadFont('assets/whyteBook.otf');

  /////////////PICTO PIENI
  pic1 = loadImage('assets/PITTOGRAMMI/PIENI/ATTIVITA.png');
  pic2 = loadImage('assets/PITTOGRAMMI/PIENI/CONTATTO.png');
  pic3 = loadImage('assets/PITTOGRAMMI/PIENI/CONVERSAZIONE.png');
  pic4 = loadImage('assets/PITTOGRAMMI/PIENI/HOME.png');
  pic5 = loadImage('assets/PITTOGRAMMI/PIENI/NUCLEO.png');
  pic6 = loadImage('assets/PITTOGRAMMI/PIENI/RICORDO.png');


  /////////////////PICTO VUOTI
  pic7 = loadImage('assets/PITTOGRAMMI/VUOTI/ATTIVITA.png');
  pic8 = loadImage('assets/PITTOGRAMMI/VUOTI/CONTATTO.png');
  pic9 = loadImage('assets/PITTOGRAMMI/VUOTI/CONVERSAZIONE.png');
  pic10 = loadImage('assets/PITTOGRAMMI/VUOTI/HOME.png');
  pic11 = loadImage('assets/PITTOGRAMMI/VUOTI/NUCLEO.png');
  pic12 = loadImage('assets/PITTOGRAMMI/VUOTI/RICORDO.png');
}

function setup() {
frameRate(600);

picto1 = createButton('');
picto1.position(30, 900);
picto1.style('background-color', 'transparent');
// picto1.style('border-style','solid' );
// picto1.style('border-color', 'white');
// picto1.style('border-width', '2px');
picto1.style("width", "100px");
picto1.style('height', '130px');
picto1.style('border', 'none');


picto2 = createButton('');
picto2.position(155, 900);
picto2.style('background-color', 'transparent');
// picto2.style('border-style','solid' );
// picto2.style('border-color', 'white');
// picto2.style('border-width', '2px');
picto2.style("width", "100px");
picto2.style('height', '130px')
picto2.style('border', 'none');


picto3 = createButton('');
picto3.position(285, 900);
picto3.style('background-color', 'transparent');
// picto3.style('border-style','solid' );
// picto3.style('border-color', 'white');
// picto3.style('border-width', '2px');
picto3.style("width", "100px");
picto3.style('height', '130px')
picto3.style('border', 'none');



}







function draw() {
  // var canvas1 = createCanvas(windowWidth, windowHeight);
  var canvas1 = createCanvas(400, 400);
  canvas1.hide();
  // canvas1.hide();

  if (mic) {
    const micLevel = mic.getLevel();
    var d = map(micLevel, 0, 1, 10, 50)
    ellipse(width / 2, height / 2, d);
  }



  var real_canvas = canvas1.canvas;
  background(0);
  // let x1 = map(mouseX, 0, windowWidth, 0, 150 );
  // let y1 = map(mouseY, -200, windowHeight, 0, 3);


  // let x1 = mouseX;
  // let y1 = -mouseY;
  // let x2 = map(x1, 0, windowWidth, 0, 150)
  // let y2 = map(y1, 0, windowHeight, 30, 0)
  //
  //
  //   translate(x2, y2  );

  translate(width / 6, height / 9.5)

  var radius = d;

  beginShape();
  fill(color('red'));
  noStroke();
  var xoff = 0;
  for (var b = 0; b < TWO_PI; b += 0.2) {
    var offset = map(noise(xoff, yoff), 0, 1, -30, 30);
    var r = radius + offset;
    var x = r * cos(b);
    var y = r * sin(b);
    vertex(x, y);
    xoff += 0.2;
    // ellipse(x  , y , 4, 4);
  }
  yoff += 0.005;
  endShape();



  beginShape();
  fill(color('blue'));
  noStroke();
  var xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    var offset = map(noise(xoff, yoff), 0, 1, -30, 30);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.2;
    // ellipse(x  , y , 4, 4);
  }
  yoff += 0.005;
  endShape();



  HTMLcontext.filter = 'blur(12px)';
  HTMLcontext.drawImage(real_canvas, 0, 0);

}

function mousePressed() {
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}




let sketch = function(p) {
  p.setup = function() {

    cnv2 = p.createCanvas(2400, 1080);
    cnv2.position(0, 0);
    cnv2.style('position', 'absolute')


  }

  p.draw = function() {

home = p.image(pic4, 30, 900, 90, 90);
nucleo = p.image(pic11, 160, 900, 90, 90);
attivita = p.image(pic7, 290, 900, 90, 90);


p.textFont(myFont);
p.textSize(40);
p.fill('white');

nome = p.text('SILVIA', 30, 50)

data = p.text('30/11/2020', 2100, 50);

indicatore = p.text('HOME', 2180, 1025);

p.textSize(24);

picto1 = p.text('Home', 40, 1025);
picto2 = p.text('Nucleo', 165, 1025);
picto3 = p.text('Attività', 295, 1025);


  }
}

let p = new p5(sketch);
