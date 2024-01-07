import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America', 'Black Widow'];
  deletedHero?:String;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }
}
