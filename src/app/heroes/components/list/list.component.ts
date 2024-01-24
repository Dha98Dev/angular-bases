import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroesNames:string[]=['spiderman','iroman','hulk','she hulk','thor','superman'];
public deletedHero?:string;
deleteHero():void{
 this.deletedHero=this.heroesNames.pop();
}
}
