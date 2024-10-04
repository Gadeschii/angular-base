import { Component, Input, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  @Input()
  public charactersList: Character[] = [
    {
      //id: uuid(),
      name:  'Trunks', 
      power:  150
    }
  ];

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // public onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index); 
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  public deleteCharacter(id?: string): void {
    if(!id) {
      return;
    }
    this.onDelete.emit(id);
  }


}
