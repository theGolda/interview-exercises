var html = '';
var prices = [22.25, 13.30, 9.90, 81.90, 49.59, 2.90];
var red;
var green;
var blue;
var rgbColor;
for (var i = 0; i < prices.length; i += 1) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style ="color:' + rgbColor + '">' + prices[i] + '</div>';
}
document.getElementById('output').innerHTML = html;