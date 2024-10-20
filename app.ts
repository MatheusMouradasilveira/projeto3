import { Coisa } from "./Coisa";
import { CurtoAlcance } from "./CurtoAlcance";
import { Guildas } from "./Guilda";
import { LongoAlcance } from "./LongoAlcance";
import { Personagem } from "./Personagem";

let Horda = new Guildas("Legião do Mal")

let Durotan:Personagem = new CurtoAlcance("Durotan")

let Sylvas = new LongoAlcance("Sylvas")

let Pyros:Personagem = new CurtoAlcance("Pyros")

let objeto = new Coisa (1000,"Espada")


Horda.addMembro(Sylvas)


Horda.addMembro(Pyros)

Sylvas.addLevel(1)

Durotan.addLevel(1)

Horda.removeMembro(Sylvas)


console.log("Inicial",Durotan.getNome(), Durotan.getVida())
console.log("Inicial",Sylvas.getNome(),Sylvas.getVida())

Durotan.machucar(500,Sylvas,2)

console.log("Primeiro ataque",Durotan.getNome(), Durotan.getVida())
console.log("Primeiro Ataque",Sylvas.getNome(), Sylvas.getVida())

Sylvas.curar(Sylvas,2000)

console.log("Curou",Sylvas.getNome(), Sylvas.getVida())

Durotan.machucar(100,Sylvas,10)

console.log("Segundo Ataque",Sylvas.getNome(), Sylvas.getVida())

Pyros.curar(Sylvas,200)

console.log("Curou",Pyros.getNome(), Pyros.getVida())

Durotan.machucar(50,Sylvas,5)

console.log("Terceiro Ataque",Sylvas.getNome(), Sylvas.getVida())

console.log(Sylvas.getGuilda())

Sylvas.machucar(500,objeto,5)

console.log(objeto.getVida())
