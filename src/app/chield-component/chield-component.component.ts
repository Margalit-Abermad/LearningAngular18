import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chield-component',
  imports: [],
  templateUrl: './chield-component.component.html',
  styleUrl: './chield-component.component.css'
})
export class ChieldComponentComponent {
@Input() messageFromParent:string='';
}
