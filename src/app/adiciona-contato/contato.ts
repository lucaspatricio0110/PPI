export enum TipoContato {
    AMIGO = 'Amigo(a)', TRABALHO = 'Trabalho', FAMILIA = 'Familia', OUTRO = 'Outro'
}
export class Contato {
    nome: string
    aniversario: Date
    tipo: TipoContato

    constructor(nm: string, an: Date, tipo: TipoContato) {
        this.nome = nm
        this.aniversario = an
        this.tipo = tipo
    }
}