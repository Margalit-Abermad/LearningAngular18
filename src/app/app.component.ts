import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  // standalone:true,
  imports: [RouterOutlet,HeaderOneComponent,ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angu';
}
