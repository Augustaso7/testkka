import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
// Si uso ngOnInit, es buena practica agregar la interfaz OnInit en el export para asegurar que el metodo se ejecute correctamente
export class Tab3Page implements OnInit {
  catFacts: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe({
      next: (data) => {
        this.catFacts = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

}
