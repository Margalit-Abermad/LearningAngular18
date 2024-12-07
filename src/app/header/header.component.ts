import { Component } from '@angular/core';
import { HeaderOneComponent } from '../header-one/header-one.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderOneComponent], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}
