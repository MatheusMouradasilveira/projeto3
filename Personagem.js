"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Coisa_1 = require("./Coisa");
class Personagem extends Coisa_1.Coisa {
    constructor(nome) {
        super(1000, nome);
        this.level = 1;
        this.alcance = 0;
        this.guildas = [];
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    getGuilda() {
        return this.guildas;
    }
    addLevel(level) {
        this.level = level;
    }
    machucar(dano, alvo, distancia) {
        let aliado = false;
        if (alvo instanceof Personagem) {
            for (let i = 0; i < alvo.guildas.length; i++) {
                for (let j = 0; j < this.guildas.length; j++) {
                    if (alvo.guildas[i] == this.guildas[j]) {
                        aliado = true;
                    }
                }
            }
            if (aliado = true) {
                console.log("a dano invalido");
            }
            else {
                let diferenca = alvo.level - this.level;
                if (diferenca >= 5) {
                    dano = dano * 0.5;
                }
                if (diferenca <= -5) {
                    dano = dano * 1.5;
                }
                if (distancia > this.alcance) {
                    console.log("O alvo está muito longe");
                }
                else if (alvo == this) {
                    console.log("dano invalido");
                }
                else {
                    if (alvo.vivo == true) {
                        alvo.vida = alvo.vida - dano;
                        if (alvo.vida > 0) {
                            alvo.vivo = true;
                        }
                        else {
                            alvo.vivo = false;
                            alvo.vida = 0;
                        }
                    }
                    else {
                        console.log(`Ataque fracassou ${alvo.nome} ja estava morto`);
                    }
                }
            }
        }
        else {
            if (distancia > this.alcance) {
                console.log("O alvo está muito longe");
            }
            else if (alvo == this) {
                console.log("dano invalido");
            }
            else {
                if (alvo.vivo == true) {
                    alvo.vida = alvo.vida - dano;
                    if (alvo.vida > 0) {
                        alvo.vivo = true;
                    }
                    else {
                        alvo.vivo = false;
                        alvo.vida = 0;
                    }
                }
                else {
                    console.log(`Ataque fracassou ${alvo.nome} ja estava morto`);
                }
            }
        }
    }
    curar(alvo, cura) {
        let a;
        if (alvo instanceof Personagem) {
            for (let i = 0; i < alvo.guildas.length; i++) {
                for (let j = 0; j < this.guildas.length; j++) {
                    if (alvo.guildas == this.guildas) {
                        a = true;
                    }
                    else {
                        a = false;
                    }
                }
                if (a = false) {
                    console.log("Ele não é um a para você pode curar");
                }
                else {
                    if (alvo.vida == 1000) {
                        console.log(`O ${alvo.nome} ja esta com a vida completa`);
                    }
                    else if (alvo.vivo == true && alvo.vida < 1000 && alvo == this) {
                        alvo.vida = alvo.vida + cura;
                        if (alvo.vida > 1000) {
                            alvo.vida = 1000;
                        }
                    }
                    else if (alvo.vivo == false) {
                        console.log(`O ${alvo.nome} ja esta morto não pode curar este personagem`);
                    }
                }
            }
        }
        else {
            console.log("Não é possivel curar um item de cenario");
        }
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map