"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guildas = void 0;
class Guildas {
    constructor(nomeGuilda) {
        this.membros = [];
        this.nomeGuilda = nomeGuilda;
    }
    addMembro(Personagem) {
        this.membros.push(Personagem);
        Personagem.guildas.push(this.nomeGuilda);
    }
    removeMembro(Personagem) {
        for (let i = 0; i < this.membros.length; i++) {
            if (this.membros[i].getNome() === Personagem.getNome()) {
                this.membros.splice(i, 1);
            }
        }
        for (let i = 0; i < Personagem.guildas.length; i++) {
            if (Personagem.guildas[i] === this.nomeGuilda) {
                Personagem.guildas.splice(i, 1);
            }
        }
    }
}
exports.Guildas = Guildas;
//# sourceMappingURL=Guilda.js.map