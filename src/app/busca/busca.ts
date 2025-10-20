import { Component, inject } from "@angular/core";
import { FilmesService } from "../model/filmes-service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Filme } from "../model/filme";

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.html',
  styleUrls: ['./busca.css']
})
export class Busca {
  private fs = inject(FilmesService);
  titulo: string = '';
  tipoBusca: string = 't'; // 't' = título único, 's' = lista
  filme?: Filme;
  lista: any[] = [];
  erro: string = '';

  buscar() {
    this.erro = '';
    this.filme = undefined;
    this.lista = [];

    if (!this.titulo.trim()) {
      this.erro = 'Digite um título para buscar.';
      return;
    }

    if (this.tipoBusca === 't') {
      this.fs.obterFilme(this.titulo).subscribe({
        next: (res) => this.filme = res,
        error: (err) => this.erro = 'Erro na busca: ' + err.message
      });
    } else {
      this.fs.buscarLista(this.titulo).subscribe({
        next: (res) => this.lista = res.Search || [],
        error: (err) => this.erro = 'Erro na busca: ' + err.message
      });
    }
  }
}
