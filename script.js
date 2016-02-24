// Your JS goes here

console.log("Sanity Check")

var colorGen = function () {
  for (var i = 0; i<54; i++) {
    var tile = document.createElement("div");
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(tile);

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randColor = "rgb(" + r + ", " + g + ", " + b + ")";

    tile.style.backgroundColor = randColor;

    tile.style.width = "11.1%";
    tile.style.float = "left";
    tile.style.paddingBottom = "11.1%";
  }
}

var colorGen2 = function () {
  for (var i=0; i<54; i++){
    var tile = document.getElementsByTagName("div")[i];
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randColor = "rgb(" + r + ", " + g + ", " + b + ")";
    tile.style.backgroundColor = randColor;
  }
}

colorGen()

setInterval(colorGen2, 2000)
