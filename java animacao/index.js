let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let katana = {
    x: 0,
    y: 100,
    raio: 35,
    img: new Image(),
    desenha: function () {
        this.img.src = 'imagens/katana.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
};

function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    katana.desenha();
    requestAnimationFrame(animacao);
}
animacao();

let isMouseInsideCanvas = true;
let lastX = katana.x;  // Para guardar a última posição X dentro do canvas
let lastY = katana.y;  // Para guardar a última posição Y dentro do canvas

document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // Verifica se o mouse está dentro do canvas
    if (x_mouse >= 0 && x_mouse <= canvas.width && y_mouse >= 0 && y_mouse <= canvas.height) {
        katana.x = x_mouse;
        katana.y = y_mouse;

        // Garante que a katana não saia dos limites do canvas
        katana.x = Math.min(Math.max(katana.x, katana.raio), canvas.width - katana.raio);
        katana.y = Math.min(Math.max(katana.y, katana.raio), canvas.height - katana.raio);

        // Atualiza as últimas posições
        lastX = katana.x;
        lastY = katana.y;
    }
});

document.addEventListener('mouseleave', function () {
    isMouseInsideCanvas = false;
    // Quando o mouse sai do canvas, mantém a última posição
    katana.x = lastX;
    katana.y = lastY;
});

