
amplitude=100;
espaco=2;
diferenca=12;
ruido=0.1;
raio=100;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(0);
  

}

function draw() {
  
  background("rgba(0,0,0,1)");
 

  fill("rgba(50,50,50,10)");
  stroke("rgba(250, 250, 250, 0.3)");
  strokeWeight(10);
  
        for (let j = 0; j*5 < 250; j++) {
            for (let i = 0; i * espaco < 100; i++) {
                sin=(amplitude*(cos(i/1.0)));
                r=(Math.random()*ruido/2.0)*raio;
                ellipse(i*10*espaco-r/2, j*diferenca+sin-r/2, r, r);
                ellipse(i*10*espaco-r/2-2, j*diferenca+sin-r/2-2, r+4, r+4);

            }
        }
  
  

  }