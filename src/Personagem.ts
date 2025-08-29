import { Util } from "./Util";


export class Personagem{
    nome: string ;
    classe: string ;
    raca: string ;
    nivel: number ;
    arma: string ;
    manaAtual: number ;
    manaMax: number ;
    vidaAtual: number ;
    vidaMax: number ;
    poderAtaque: number ;

    constructor(nome: string){
        this.nome = "";
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.manaAtual = 0;
        this.manaMax = 0;
        this.vidaAtual = 0;
        this.vidaMax = 0;
        this.poderAtaque = 0;
    }

    treinarPoderAtaque(): void{
           const incrementoDoTreino: number = Util.gerarNumeroAleatoria(5,15);
           this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
    }
    
    estaVivo(){
        return(this.vidaAtual > 0)
        }

        subirNivel(){
            this.nivel = +1 //aarumar dps esta colocando o nivel em "1".         talvez colocar "nivel + 1" arrume
         }
}