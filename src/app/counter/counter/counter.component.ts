import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
<hr>
<p>counter: {{counter}}</p>
<br>
<button (click)="sumar1(7)" >+</button>
<button (click)="restar1(3)">-</button>
<button (click)="reset()">reset</button>

    `
})

export class CounterComponent{
    public  title:string = 'mi priera app de angular';
    public counter:number=1;
   constructor(){
   
   }
     sumar1(value:number){
       this.counter+=value
    }
    restar1(value:number){
     this.counter-=value;
    }
    reset(){
     this.counter=10
    }
}