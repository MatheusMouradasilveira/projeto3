import { Personagem } from "./Personagem";


export class CurtoAlcance extends Personagem {

    constructor(nome: string) {
      super(nome);
      this.alcance = 2
    }

 
  }