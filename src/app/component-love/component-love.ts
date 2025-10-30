import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-love',
  imports: [],
  templateUrl: './component-love.html',
  styleUrl: './component-love.css',
})
export class ComponentLove {

  @Input() textFromParent: string = '';

 

}
