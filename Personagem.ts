import { Coisa } from "./Coisa";

export class Personagem extends Coisa{
  protected level: number = 1;
  protected alcance: number = 0;
  guildas: string[] = [];

  constructor(nome: string) {
    super(1000, nome)
    this.nome = nome
  
  }

  getNome() {
    return this.nome;
  }

  getVida() {
    return this.vida
  }

  getGuilda() {
    return this.guildas
  }

  addLevel(level: number) {
    this.level = level
  }

  machucar(dano: number, alvo: Coisa, distancia: number) {
    let aliado: boolean = false
    if(alvo instanceof Personagem){
      for (let i = 0; i < alvo.guildas.length; i++) {
        for (let j = 0; j < this.guildas.length; j++) {
          if (alvo.guildas[i] == this.guildas[j]) {
            aliado = true
          }
  
        }
  
      }
      if (aliado = true) {
        console.log("a dano invalido")
      }
      else {
        let diferenca: number = alvo.level - this.level
        if (diferenca >= 5) {
          dano = dano * 0.5
        }
        if (diferenca <= -5) {
          dano = dano * 1.5
        }
        if (distancia > this.alcance) {
          console.log("O alvo está muito longe")
        } else if (alvo == this) {
          console.log("dano invalido")
        } else {
          if (alvo.vivo == true) {
            alvo.vida = alvo.vida - dano
            if (alvo.vida > 0) {
              alvo.vivo = true
            } else {
              alvo.vivo = false
              alvo.vida = 0
            }
          } else { console.log(`Ataque fracassou ${alvo.nome} ja estava morto`) }
        }
  
      }
    }else{
      if (distancia > this.alcance) {
        console.log("O alvo está muito longe")
      } else if (alvo == this) {
        console.log("dano invalido")
      } else {
        if (alvo.vivo == true) {
          alvo.vida = alvo.vida - dano
          if (alvo.vida > 0) {
            alvo.vivo = true
          } else {
            alvo.vivo = false
            alvo.vida = 0
          }
        } else { console.log(`Ataque fracassou ${alvo.nome} ja estava morto`) }
      }

       
    }
    
   
  }

  curar(alvo: Personagem, cura: number) {
    let a: boolean
    if(alvo instanceof Personagem){
    for (let i = 0; i < alvo.guildas.length; i++) {
      for (let j = 0; j < this.guildas.length; j++) {
        if (alvo.guildas == this.guildas) {
          a = true
        } else {
          a = false
        }

      }
      if (a = false) {
        console.log(" não pode curar")
      } else {

        if (alvo.vida == 1000) {
          console.log(`O ${alvo.nome} hp cheio`)
        } else if (alvo.vivo == true && alvo.vida < 1000 && alvo == this) {
          alvo.vida = alvo.vida + cura
          if (alvo.vida > 1000) {
            alvo.vida = 1000
          }
        } else if (alvo.vivo == false) {
          console.log(`O ${alvo.nome} morto`)
        }

      }
    }
  } else{console.log("ação inválida")
}
}
}