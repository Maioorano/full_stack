let casinha = document.getElementById('casinha');
let ctx2 = casinha.getContext('2d');

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#8FFDD4'
ctx2.fillRect(0, 0, 400, 400);
ctx2.closePath();

//circulos

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow'
ctx2.strokeStyle = 'yellow';
ctx2.arc(320, 70, 50, 2 * Math.PI, 0 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green'
ctx2.strokeStyle = 'green';
ctx2.arc(60, 225, 25, 2 * Math.PI, 0 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();


//fundo

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'gray'
ctx2.fillRect(0, 300, 400, 100);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'green'
ctx2.strokeStyle = 'green';
ctx2.arc(360, 285, 25, 2 * Math.PI, 0 * Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//cubos

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' blue'
ctx2.strokeStyle = ' blue'
ctx2.fillRect(0, 350, 100, 50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' blue'
ctx2.strokeStyle = ' blue'
ctx2.fillRect(100, 350, 50, 50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' blue'
ctx2.strokeStyle = ' blue'
ctx2.fillRect(0, 300, 50, 50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' brown'
ctx2.strokeStyle = ' brown'
ctx2.fillRect(50, 250, 20, 50);
ctx2.closePath();


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' brown'
ctx2.strokeStyle = ' brown'
ctx2.fillRect(350, 310, 20, 50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' brown'
ctx2.strokeStyle = ' brown'
ctx2.fillRect(140, 180, 120, 120);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' lightskyblue'
ctx2.strokeStyle = ' lightskyblue'
ctx2.fillRect(160, 210, 30, 30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' lightskyblue'
ctx2.strokeStyle = ' lightskyblue'
ctx2.fillRect(210, 210, 30, 30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = ' black'
ctx2.strokeStyle = ' black'
ctx2.fillRect(190, 240, 20, 60);
ctx2.closePath();

//triangulo

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'orange';
ctx2.strokeStyle = 'orange';
ctx2.moveTo(260, 180);
ctx2.lineTo(200, 130);
ctx2.lineTo(140, 180);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//linha circular

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.fillStyle = 'blue';
ctx2.arc(-1, 300, 50, 1.5 * Math.PI, 2.5 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.fillStyle = 'blue';
ctx2.arc(150, 401, 50, 1.5 * Math.PI, 2.5 * Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();