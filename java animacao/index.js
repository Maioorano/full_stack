let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// Imagem que sobe e desce
let fundo = {
    x: 100,
    y: 100,
    raio: 200,
    img: new Image(),
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    }
};

let imagemSobeDesce = {
    x: 170,
    y: 170,
    raio: 60,
    img: new Image(),
    velocidade: 2,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },
    atualizar: function () {
        this.y += this.velocidade;
        if (this.y >= canvas.height - this.raio || this.y <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};
let imagemSobeDesce2 = {
    x: 60,
    y: 60,
    raio: 40,
    img: new Image(),
    velocidade: 1.5,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },
    atualizar: function () {
        this.y += this.velocidade;
        if (this.y >= canvas.height - this.raio || this.y <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};

let imagemSobeDesce3 = {
    x: 240,
    y: 60,
    raio: 40,
    img: new Image(),
    velocidade: 1.5,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },
    atualizar: function () {
        this.y += this.velocidade;
        if (this.y >= canvas.height - this.raio || this.y <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};

// Imagem que vai de um lado para o outro
let imagemVaiVem = {
    x: 200,
    y: 70,
    raio: 60,
    img: new Image(),
    velocidade: 2,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },

    atualizar: function () {
        this.x += this.velocidade;
        if (this.x >= canvas.width - this.raio || this.x <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};

let imagemVaiVem2 = {
    x: 200,
    y: 250,
    raio: 40,
    img: new Image(),
    velocidade: 1.5,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },

    atualizar: function () {
        this.x += this.velocidade;
        if (this.x >= canvas.width - this.raio || this.x <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};

let imagemVaiVem3 = {
    x: 150,
    y: 150,
    raio: 55,
    img: new Image(),
    velocidade: 1.5,
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 1.5 * this.raio, 1.5 * this.raio);
    },

    atualizar: function () {
        this.x += this.velocidade;
        if (this.x >= canvas.width - this.raio || this.x <= this.raio) {
            this.velocidade = -this.velocidade;
        }
    }
};
let katana = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function () {
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    }
};
// Carregar todas as imagens antes de começar a animação
// Substitua com o caminho correto da sua katana
fundo.img.src = 'imagens/fundo.png';
imagemSobeDesce.img.src = 'imagens/banana.png';
imagemSobeDesce2.img.src = 'imagens/melancia.png';  // Substitua com o caminho correto da imagem que sobe/desce
imagemSobeDesce3.img.src = 'imagens/limao.png';  // Substitua com o caminho correto da imagem que sobe/desce
imagemVaiVem.img.src = 'imagens/manga.png';     // Substitua com o caminho correto da imagem que vai/volta
imagemVaiVem2.img.src = 'imagens/morango.png';     // Substitua com o caminho correto da imagem que vai/volta
imagemVaiVem3.img.src = 'imagens/uva.png'; // Substitua com o caminho correto da imagem que vai/volta
katana.img.src = 'imagens/katana.png';

// Função para inicializar e atualizar a animação
function animacao() {
    // Garantir que todas as imagens foram carregadas
    if (katana.img.complete && imagemSobeDesce.img.complete && imagemVaiVem.img.complete && imagemSobeDesce2.img.complete && imagemVaiVem2.img.complete && imagemVaiVem3.img.complete && imagemSobeDesce3.img.complete && fundo.img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpar o canvas

        // Desenhar as imagens
        fundo.desenha();
        imagemSobeDesce.desenha();
        imagemSobeDesce2.desenha();
        imagemSobeDesce3.desenha();
        imagemVaiVem.desenha();
        imagemVaiVem2.desenha();
        imagemVaiVem3.desenha();
        katana.desenha();


        // Atualizar a posição das imagens
        imagemSobeDesce.atualizar();
        imagemSobeDesce2.atualizar();
        imagemSobeDesce3.atualizar();
        imagemVaiVem.atualizar();
        imagemVaiVem2.atualizar();
        imagemVaiVem3.atualizar();


        // Continuar chamando a função de animação
        requestAnimationFrame(animacao);
    } else {
        // Aguardar até que as imagens estejam carregadas
        setTimeout(animacao, 100);
    }
}

// Iniciar a animação quando as imagens forem carregadas
animacao();

// Atualiza a posição da katana com o mouse
document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // Impede que a katana saia dos limites do canvas
    if (x_mouse >= 0 && x_mouse <= canvas.width && y_mouse >= 0 && y_mouse <= canvas.height) {
        katana.x = x_mouse;
        katana.y = y_mouse;
        katana.x = Math.min(Math.max(katana.x, katana.raio), canvas.width - katana.raio);
        katana.y = Math.min(Math.max(katana.y, katana.raio), canvas.height - katana.raio);
    }
});
