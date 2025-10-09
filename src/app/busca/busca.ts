import { Component, inject } from "@angular/core"
import { FilmesService } from "../model/filmes-service"

@Component({
    selector: 'app-busca',
    imports: [],
    templateUrl: './busca.html',
    styleUrl: './busca.css'
})
export class Busca {
    private fs = inject(FilmesService)

    constructor() {
        this.buscarPorTitulo('The Godfather')
    }

    buscarPorTitulo(t: string) {
        this.fs.obterFilme(t).subscribe(filme => {
            console.log(filme)
        })
    }
}