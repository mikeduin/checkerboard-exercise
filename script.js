for (var i = 0; i<27; i++) {

  var r = (100);
  var g = (100);
  var b = (100);
  var aTileForm = "rgb(" + (r+(i*2)) + ", " + g + ", " + b + ")"
  var bTileForm = "rgb(" + (r-(i*2)) + ", " + g + ", " + b + ")"

  var aTile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(aTile);
  aTile.style.backgroundColor = aTileForm;
  aTile.style.width = "11.1%";
  aTile.style.float = "left";
  aTile.style.paddingBottom = "11.1%";

  var bTile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(bTile);
  bTile.style.backgroundColor = bTileForm;
  bTile.style.width = "11.1%";
  bTile.style.float = "left";
  bTile.style.paddingBottom = "11.1%";
}
