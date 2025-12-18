import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('piedra-deco');
  waEncodedInitialMsg = 'https://wa.me/528119947818?text=Hola%20%F0%9F%91%8B%0AMe%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20con%20Piedra%20Deco%20para%20piedra%20decorativa.%0AEl%20%C3%A1rea%20aproximada%20es%20de%20___%20m%C2%B2%20(si%20ya%20lo%20tienes).%20Gracias.';
}
