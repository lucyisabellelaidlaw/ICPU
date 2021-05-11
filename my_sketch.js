let treeHeightDiv = [2, 1.5, 1.7, 1.1, 1.3];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(color(25, 191, 128));

  fill(color(25, 191, 128));
  rect(40, 0, windowWidth-40, mouseY);

  let spacing = windowWidth / 6;
  let xCoord = spacing;
  for(let i = 0; i < 5; i++) {
    drawBaseTree(i, xCoord);
    xCoord = xCoord + spacing
  }

  fill(color(161, 219, 5));
  rect(0, 40, 40, windowHeight-40);
  fill(color(101, 135, 11));
  rect(0, mouseY, 40, windowHeight-mouseY);


}

function drawBaseTree(treeNum, xCoord) {
  fill(color(98, 50, 57));
  let yCoord = (windowHeight-mouseY)/treeHeightDiv[treeNum]
  rect(xCoord, windowHeight-yCoord, 3, yCoord);
  fill(color(161, 219, 5))
  if(windowHeight-mouseY > 50) {
    ellipse(xCoord-15, windowHeight-40, 30, 10);
    ellipse(xCoord+18, windowHeight-40, 30, 10);
  }
  if (windowHeight-mouseY > 100) {
    ellipse(xCoord-15, windowHeight-40, 30, 10);
    ellipse(xCoord+18, windowHeight-40, 30, 10);
    ellipse(xCoord-15, windowHeight-80, 30, 10);
    ellipse(xCoord+18, windowHeight-80, 30, 10);
  }

  if (windowHeight-mouseY > 150) {
    ellipse(xCoord-15, windowHeight-40, 30, 10);
    ellipse(xCoord+18, windowHeight-40, 30, 10);
    ellipse(xCoord-15, windowHeight-80, 30, 10);
    ellipse(xCoord+18, windowHeight-80, 30, 10);
    ellipse(xCoord-15, windowHeight-140, 30, 10);
    ellipse(xCoord+18, windowHeight-140, 30, 10);
  }

  if (windowHeight-mouseY > 200) {
    ellipse(xCoord-15, windowHeight-40, 30, 10);
    ellipse(xCoord+18, windowHeight-40, 30, 10);
    ellipse(xCoord-15, windowHeight-80, 30, 10);
    ellipse(xCoord+18, windowHeight-80, 30, 10);
    ellipse(xCoord-15, windowHeight-170, 30, 10);
    ellipse(xCoord+18, windowHeight-170, 30, 10);
  }

  if (windowHeight-mouseY > 300) {
    ellipse(xCoord-15, windowHeight-40, 30, 10);
    ellipse(xCoord+18, windowHeight-40, 30, 10);
    ellipse(xCoord-15, windowHeight-80, 30, 10);
    ellipse(xCoord+18, windowHeight-80, 30, 10);
    ellipse(xCoord-15, windowHeight-250, 30, 10);
    ellipse(xCoord+18, windowHeight-250, 30, 10);
  }
}


//We need leaves to appear and disappear based on the height of the tree, should not be too hard to figure something out
//if mouse Y is above 50, show leaf 1, if mouse Y is above 70, show leaf one and two
