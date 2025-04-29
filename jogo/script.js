const jogador1 = document.getElementById('jogador1');
const jogador2 = document.getElementById('jogador2');
const bola = document.getElementById('bola');
const golEsquerdo = document.getElementById('gol-esquerdo');
const golDireito = document.getElementById('gol-direito');

let jogador1Pos = { x: 20, y: 180 }; // Posição do jogador 1 na extremidade esquerda
let jogador2Pos = { x: 730, y: 180 }; // Posição do jogador 2 na extremidade direita
let bolaPos = { x: 385, y: 190 }; // Bola centralizada no meio do campo

let velocidade = 5;
let gol1 = 0;
let gol2 = 0;

let bolaMovendo = false;
let bolaDirecao = { x: 0, y: 0 }; // Direção da bola (inicialmente está parada)

// Display de pontos
let pontosDisplay = document.createElement('div');
document.body.appendChild(pontosDisplay);
pontosDisplay.style.position = 'absolute';
pontosDisplay.style.top = '20px';
pontosDisplay.style.fontSize = '24px';
pontosDisplay.style.color = 'white';
pontosDisplay.innerText = `Jogador 1: ${gol1} - ${gol2} :Jogador 2`;

// Movimentação do jogador 1 (A e D)
document.addEventListener('keydown', (e) => {
    // Movimentação do jogador 1
    if (e.key === 'a' || e.key === 'A') {
        jogador1Pos.x = Math.max(0, jogador1Pos.x - velocidade);  // Impede que o jogador 1 saia do campo
    } else if (e.key === 'd' || e.key === 'D') {
        jogador1Pos.x = Math.min(375, jogador1Pos.x + velocidade);  // Impede que o jogador 1 ultrapasse a linha central
    }

    // Movimentação do jogador 2
    if (e.key === 'ArrowLeft') {
        jogador2Pos.x = Math.max(425, jogador2Pos.x - velocidade);  // Impede que o jogador 2 ultrapasse a linha central
    } else if (e.key === 'ArrowRight') {
        jogador2Pos.x = Math.min(800 - 50, jogador2Pos.x + velocidade);  // Impede que o jogador 2 saia do campo
    }

    // Chute do jogador 1 (Espaço)
    if (e.key === ' ' && !bolaMovendo) {
        chuteJogador1();
    }

    // Chute do jogador 2 (Enter)
    if (e.key === 'Enter' && !bolaMovendo) {
        chuteJogador2();
    }

    atualizarPosicoes();
});

// Função de chute do jogador 1
function chuteJogador1() {
    bolaMovendo = true;
    bolaDirecao = { x: 5, y: 0 }; // A bola vai para a direita
    atualizarPosicoes();
}

// Função de chute do jogador 2
function chuteJogador2() {
    bolaMovendo = true;
    bolaDirecao = { x: -5, y: 0 }; // A bola vai para a esquerda
    atualizarPosicoes();
}

// Função para atualizar as posições dos jogadores e da bola
function atualizarPosicoes() {
    jogador1.style.left = jogador1Pos.x + 'px';
    jogador1.style.bottom = jogador1Pos.y + 'px';
    jogador2.style.left = jogador2Pos.x + 'px';
    jogador2.style.bottom = jogador2Pos.y + 'px';
    bola.style.left = bolaPos.x + 'px';
    bola.style.bottom = bolaPos.y + 'px';
}

// Função para resetar o jogo
function resetJogo() {
    bolaPos = { x: 385, y: 190 };  // Bola no centro
    jogador1Pos = { x: 20, y: 180 }; // Jogador 1 na extremidade esquerda
    jogador2Pos = { x: 730, y: 180 }; // Jogador 2 na extremidade direita
    bolaMovendo = false;
    bolaDirecao = { x: 0, y: 0 };
    pontosDisplay.innerText = `Jogador 1: ${gol1} - ${gol2} :Jogador 2`;
}

// Função para movimentar a bola
function moverBola() {
    if (bolaMovendo) {
        bolaPos.x += bolaDirecao.x;
        bolaPos.y += bolaDirecao.y;

        // Colisão com os gols
        if (bolaPos.x < 50 && bolaPos.y > 10 && bolaPos.y < 60) {
            gol2++;
            resetJogo();
        }
        if (bolaPos.x > 720 && bolaPos.y > 10 && bolaPos.y < 60) {
            gol1++;
            resetJogo();
        }

        // Impedir que a bola saia do campo
        if (bolaPos.x < 0) bolaPos.x = 0;
        if (bolaPos.x > 770) bolaPos.x = 770;
        if (bolaPos.y < 0) bolaPos.y = 0;
        if (bolaPos.y > 370) bolaPos.y = 370;

        pontosDisplay.innerText = `Jogador 1: ${gol1} - ${gol2} :Jogador 2`;
    }

    atualizarPosicoes();
}

// Chama a função para movimentar a bola a cada 16ms (aproximadamente 60fps)
setInterval(moverBola, 16);
