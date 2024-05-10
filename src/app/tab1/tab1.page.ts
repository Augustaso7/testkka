import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  elemento: any;
  tareas: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.elemento = { id: id, nombre: `Elemento ${id}` };
      console.log(this.elemento);
    });

    this.tareas = [
      "Completar la presentación del proyecto para el cliente.",
      "Preparar el informe trimestral de ventas.",
      "Revisar y corregir errores en el código del nuevo módulo.",
      "Coordinar la reunión del equipo de desarrollo para el próximo sprint.",
      "Investigar nuevas tecnologías para mejorar el rendimiento de la aplicación.",
      "Realizar pruebas de usabilidad en la interfaz de usuario.",
      "Actualizar la documentación del proyecto.",
      "Organizar el evento de lanzamiento del producto.",
      "Configurar el sistema de control de versiones para el nuevo proyecto.",
      "Programar la sesión de formación sobre las últimas actualizaciones del software."
    ]
  }
}
