let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//retangulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'blue'
ctx.fillRect(0, 0, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'
ctx.fillRect(330, 0, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow'
ctx.strokeStyle = 'yellow'
ctx.fillRect(0, 300, 50, 100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow'
ctx.strokeStyle = 'yellow'
ctx.fillRect(0, 350, 100, 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'
ctx.fillRect(350, 300, 50, 100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black'
ctx.strokeStyle = 'black'
ctx.fillRect(300, 350, 50, 100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'
ctx.strokeStyle = 'aqua'
ctx.fillRect(0, 150, 50, 100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'
ctx.strokeStyle = 'aqua'
ctx.fillRect(350, 175, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'
ctx.fillRect(160, 200, 40, 40);
ctx.closePath();

//linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(400, 0);
ctx.lineTo(200, 200);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'gray';
ctx.moveTo(200, 200);
ctx.lineTo(200, 400);
ctx.stroke()
ctx.closePath();

//linha circular

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, 200, 70, 1 * Math.PI, 2 * Math.PI);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, 200, 100, 1.75 * Math.PI, 0 * Math.PI);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, 200, 100, 1 * Math.PI, 1.25 * Math.PI);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, 400, 90, 1 * Math.PI, 1.5 * Math.PI);
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, 400, 65, 1.5 * Math.PI, 0 * Math.PI);
ctx.stroke()
ctx.closePath();

//circulos

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'
ctx.strokeStyle = 'green';
ctx.arc(200, 400, 45, 2 * Math.PI, 0 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'
ctx.strokeStyle = 'blue';
ctx.arc(200, 160, 18, 2 * Math.PI, 0 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow'
ctx.strokeStyle = 'green';
ctx.arc(100, 280, 18, 2 * Math.PI, 0 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow'
ctx.strokeStyle = 'green';
ctx.arc(300, 280, 18, 2 * Math.PI, 0 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//texto

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas", 200, 60);
ctx.closePath();


