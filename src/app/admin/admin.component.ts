import { Component } from '@angular/core';
import { anuncio } from '../anuncios';
import { AnunciosService } from '../anuncios.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  anuncios: anuncio[] = [];

  constructor(private anunciosService: AnunciosService){}


  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios() {
    this.anunciosService.getAnuncios().subscribe({
      next: (data) => (this.anuncios = data),
    });
  }

}
