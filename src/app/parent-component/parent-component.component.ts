import { Component } from '@angular/core';
import { ChieldComponentComponent } from '../chield-component/chield-component.component';

@Component({
  selector: 'app-parent-component',
  imports: [ChieldComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  message: string = 'Parent component- to remove data';
}
