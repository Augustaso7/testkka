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
  mensaje: any;

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

    const datosString = sessionStorage.getItem('datos'); // Obtiene los datos de sessionStorage
    if (datosString) {
      const datos = JSON.parse(datosString);
      this.mensaje = datos.mensaje;
      sessionStorage.removeItem('datos'); // Elimina los datos de sessionStorage después de usarlos
    }
  }

}
