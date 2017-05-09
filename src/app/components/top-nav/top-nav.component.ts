import { Component, Input } from '@angular/core';

@Component({
  selector: 'jlm-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  @Input() color: string;

  constructor() { }

}
