import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { anuncio } from '../anuncios';
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  anuncios: anuncio[] = [];
  isEditing: boolean = false;
  submitted: boolean = false;
  formGroupAnuncio: FormGroup;
  myDrop: any;

  constructor(
    private anunciosService: AnunciosService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupAnuncio = this.formBuilder.group({
      id: [''],
      title: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      date: ['',Validators.required],
      status: ['',Validators.required],
      image: ['',Validators.required],

    });
  }

  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios() {
    this.anunciosService.getAnuncios().subscribe({
      next: data => this.anuncios = data
    });
  }

  save() {
    this.submitted = true;
    if(this.formGroupAnuncio.valid)
    {

    if (this.isEditing) {
      this.anunciosService.edit(this.formGroupAnuncio.value).subscribe({
        next: () => {
          this.loadAnuncios();
          this.formGroupAnuncio.reset();
          this.isEditing = false;
        }
      })
    } else {
      this.anunciosService.save(this.formGroupAnuncio.value).subscribe({
        next: (data) => {
          this.anuncios.push(data);
          this.formGroupAnuncio.reset();
        }
      })
    }

    this.submitted = false;
  }
  }

  edit(anuncio: anuncio) {

    this.formGroupAnuncio.setValue(anuncio);
    this.isEditing = true;
  }

  delete(anuncio: anuncio) {
    this.anunciosService.delete(anuncio).subscribe({
      next: () => this.loadAnuncios()
    })
  }

  clean() {
    this.formGroupAnuncio.reset();
    this.isEditing = false;
    this.submitted = false;
  }

  get title(): any {
    return this.formGroupAnuncio.get('title');
  }

  get price(): any {
    return this.formGroupAnuncio.get('price');
  }

  get description(): any {
    return this.formGroupAnuncio.get('description');
  }


  get date(): any {
    return this.formGroupAnuncio.get('date');
  }

  get status(): any {
    return this.formGroupAnuncio.get('status');
  }

  get image(): any {
    return this.formGroupAnuncio.get('image');
  }

}
