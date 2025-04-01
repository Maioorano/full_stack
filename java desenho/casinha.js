let casinha = document.getElementById('casinha');
let ctx2 = casinha.getContext('2d');

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#8FFDD4'
ctx2.fillRect(0, 0, 400, 400);
ctx2.closePath();