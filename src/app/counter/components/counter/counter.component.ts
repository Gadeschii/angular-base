import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
    <button (click) = "increaseBy(value)"> +1 </button>
    <button (click)="decreaseBy(value)"> -1</button>
    <button (click)="reset()"> Reset </button>
    `,	
})

export class CounterComponent {
    public value: number = 1;
    public counter: number = 0;

    increaseBy(value:number): void {
      this.counter += value;
  
    }
    decreaseBy(value: number): void {
      this.counter -= value;
    }
    reset(): void {
      this.counter = 0;
    }
}

// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-counter',
//     template: '<h1>Counter Component</h1>',
//     // templateUrl: './app.component.html',
//    // styleUrl: './app.component.css'
//   })
// export class CounterComponent{

// }