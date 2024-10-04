import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public character:Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 15000
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        },
        {
            id: uuid(),
            name: 'Krillin',
            power: 3000
        }
    ]; 

    addCharacter(character:Character):void {
        const newCharacter:Character ={  id: uuid() , ...character}; //spread operator (...) to copy all properties of the character object
        this.character.push(character);
    }

    // onDeleteCharacter(index: number): void {
    //     this.character.splice(index,1);
    // }

    deleteCharacterById(id: string): void {
        this.character = this.character.filter(character => character.id !== id);
    }
    
}