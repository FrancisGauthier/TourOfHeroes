import { Component,Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template:`  <div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>id:</label>
    {{hero.id}}
    <input [(ngModel)]="hero.name" placeholder="name">
  
  </div>
  <div><label>name:</label>{{hero.name}}</div>
  </div>`
})


export class HeroDetailComponent {

    @Input() hero: Hero;
}

