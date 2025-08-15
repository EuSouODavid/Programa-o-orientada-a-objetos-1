import { Personagem } from "./Personagem";

const p: Personagem = new Personagem();
p.nome = "Édecio";
p.classe = "Monge";
p.raca = "Lith";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMax = 100;
p.manaAtual = p.manaMax;
p.vidaMax = 100;
p.vidaAtual = p.vidaMax;
p.poderAtaque = 1;

console.table(p);