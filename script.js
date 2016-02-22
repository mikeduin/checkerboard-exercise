// Your JS goes here

for (var i = 0; i<27; i++) {
  var blackTile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(blackTile);
  blackTile.style.backgroundColor = "black";
  blackTile.style.width = "11.1%";
  blackTile.style.float = "left";
  blackTile.style.paddingBottom = "11.1%";

  var redTile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(redTile);
  redTile.style.backgroundColor = "red";
  redTile.style.width = "11.1%";
  redTile.style.float = "left";
  redTile.style.paddingBottom = "11.1%";
}
