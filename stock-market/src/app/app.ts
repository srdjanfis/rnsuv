import { Component } from '@angular/core';
import { Stock } from './model/stock';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class App {

  protected readonly title: string = 'Stock Market App';

}
