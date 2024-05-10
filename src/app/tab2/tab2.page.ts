import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  actividades = [
    {
      titulo: 'Senderismo en las montañas',
      subtitulo: 'Explora la naturaleza y disfruta de impresionantes vistas',
      descripcion: 'Disfruta de una emocionante caminata por senderos escarpados y sumérgete en la belleza natural de las montañas.',
      img: 'https://statics-cuidateplus.marca.com/cms/styles/ratio_43/azblob/trekking.jpg.webp?itok=2x3WxKz8',
      id: 'aaaa'
    },
    {
      titulo: 'Camping en el bosque',
      subtitulo: 'Experimenta la vida al aire libre bajo las estrellas',
      descripcion: 'Acampa en medio de exuberantes bosques, enciende una fogata y comparte historias con amigos mientras observas el cielo nocturno.',
      img: 'https://cdn.outsideonline.com/wp-content/uploads/2020/06/19/glamping-ventana-california-camping_h.jpg',
      id: 'bbbb'
    },
    {
      titulo: 'Escalada en roca',
      subtitulo: 'Desafía tus límites y alcanza nuevas alturas',
      descripcion: 'Supera desafiantes rutas de escalada, siente la adrenalina mientras te aferras a las rocas y alcanza la cima con determinación y coraje.',
      img: 'https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/sierra/articles/big/SIERRA%20rock%20climber%20WB.jpg.webp?itok=p6PJ48fY',
      id: 'cccc'
    }
  ]
  constructor(private router: Router) {}

  goToTab1(id: string) {
    this.router.navigate(['/tab1', id]);
  }

  pasarDatos() {
    const datos = { mensaje: 'Hola desde el Tab 2' };
    sessionStorage.setItem('datos', JSON.stringify(datos)); // Almacena los datos en sessionStorage
    this.router.navigate(['/tab3']); // Navega al componente destino
  }
}
