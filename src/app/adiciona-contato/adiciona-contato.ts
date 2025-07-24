import { Component } from '@angular/core';
import { Contato, TipoContato } from './contato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css'
  imports: [CommonModule]
})
export class AdicionaContato {
  contatos: Contato []
  opcoesContato: string[]

  constructor() {
    this.contatos = []
    this.opcoesContato = Object.values(TipoContato)
  }
  adicionar(nm: string, an: string, tp: string) {
  let aniversario = new Date(an)
  let tipo = this.getTipoContato(tp)
  const c = new Contato(nm, aniversario, tipo)
  this.contatos.push(c)
  }
  getTipoContato(str: string) {
    if (str === TipoContato.AMIGO) {
      return TipoContato.AMIGO
    } else if (str === TipoContato.TRABALHO) {
      return TipoContato.TRABALHO
    } else if (str === TipoContato.FAMILIA) {
      return TipoContato.FAMILIA
    } else {
      return TipoContato.TRABALHO
    }
  }
}
