import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `Counter: {{ counter }}
    <br>
    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>`
})

export class CounterComponent {

    constructor() { }

    counter = 10;

    incrementar(value: number): void {
      this.counter += value;
    }
  
    reset(): void{
      this.counter=10;
    }

}