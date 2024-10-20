"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guilda = void 0;
class Guilda {
    constructor() {
        this.membros = [];
    }
    adicionarMembro(personagem) {
        this.membros.push(personagem);
    }
    removerMembro(personagem) {
        const index = this.membros.indexOf(personagem);
        if (index !== -1) {
            this.membros.splice(index, 1);
        }
    }
    getMembros() {
        return this.membros;
    }
}
exports.Guilda = Guilda;
//# sourceMappingURL=Guinda.js.map