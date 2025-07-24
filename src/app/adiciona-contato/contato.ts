export enum TipoContato {
    AMIGO = 'Amigo(a)', TRABALHO = 'Trabalho', FAMILIA = 'Familia', OUTRO = 'Outro'
}
export class Contato {
    nome: string
    telefone: number
    email: string
    aniversario: Date
    tipo: TipoContato

    constructor(nm: string, tel: number, em: string, an: Date, tipo: TipoContato) {
        this.nome = nm
        this.telefante = tel
        this.eMail = em
        this.aniversario = an
        this.tipo = tipo
    }
}
