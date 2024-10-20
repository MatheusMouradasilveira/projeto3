import { Personagem } from "./Personagem";

export class Coisa {
   vida: number;
   vivo: boolean = true;
   nome: string;

  constructor(vida:number, nome:string){
    this.vida = vida;
    this.nome = nome
  }

  getNome() {
    return this.nome;
  }
  getVida() {
    return this.vida
  }
}