import { Personagem } from "./Personagem";

 export class Guildas{

  protected membros: Personagem[] = [];
  protected nomeGuilda: string

  constructor(nomeGuilda:string){
    this.nomeGuilda = nomeGuilda
  }

  addMembro(Personagem:Personagem){
     this.membros.push(Personagem)
     Personagem.guildas.push(this.nomeGuilda)
  }
   
  removeMembro(Personagem: Personagem){
  for (let i = 0; i < this.membros.length; i++) {
   if(this.membros[i].getNome() === Personagem.getNome()){
    this.membros.splice(i, 1)
   }
  }
  for (let i = 0; i < Personagem.guildas.length; i++) {
    if(Personagem.guildas[i] === this.nomeGuilda){
      Personagem.guildas.splice(i, 1)
    }
    
  }
  
  }
}

 


