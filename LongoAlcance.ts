import { Personagem } from "./Personagem";


export class LongoAlcance extends Personagem {
  
    constructor(nome: string) {
      super(nome);
      this.alcance = 20
    }

 
  }