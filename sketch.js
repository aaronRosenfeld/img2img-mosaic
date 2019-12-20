let srcImg, dstImg;
var srcTiles = [];
var dstTiles = [];
var spacing;

function preload() {
  srcImg = loadImage('assets/image1.jpg');
  dstImg = loadImage('assets/image2.jpg');
}

function setup() {
  createCanvas(dstImg.width, dstImg.height);
  noLoop();
  spacing = 20;
  srcImg.loadPixels();
  dstImg.loadPixels();
  srcTiles = tileImage(srcImg);
  dstTiles = tileImage(dstImg);
  //print(srcTiles);
}

function draw() {
  background(220);
}

function tileImage(img){
  var tiles = [];
  for(var _x = 0; ((1+_x)*spacing) <= img.width; _x++){
    for(var _y = 0; ((1+_y)*spacing) <= img.height; _y++){
      var light = 0;
      var count = 0;
      for(var tileX = _x*spacing; tileX < _x*spacing+spacing; tileX++){
        for(var tileY = _y*spacing; tileY < _y*spacing+spacing; tileY++){
          // let off = (tileY * img.width + tileX) * pixelDensity() * 4;
          // let components = [
          //   img.pixels[off],
          //   img.pixels[off + 1],
          //   img.pixels[off + 2],
          //   img.pixels[off + 3]
          // ];
          // light += lightness(color(components));
          light += lightness(img.get(tileX, tileY));
          count++;
        }
      }
      light = parseFloat(light)/count;
      var tile = {
        x: _x*spacing,
        y: _y*spacing,
        light: light
      }
      tiles.push(tile);
    }
  }
  return tiles;
}
