import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "IronMan"
  public realName :string = 'Tony Stark';
  public age :number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  public getHeroDescription():string{
    
    return `${this.name} is a hero who is: ${this.age} years`;
  }

  public changeHeroName(): void{
    this.name = 'Spiderman';
  }
  public changeHeroAge(): void{
    this.age = 22;
  }

  resetForm():void{ 
    this.name = 'IronMan';
    this.age = 45;
  }


}
