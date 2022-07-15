import { Character } from "./interfaces/Character";

// 3.a
export const performAttack = (
    attacker: Character, 
    defender: Character,
    validator: (input:Character) => boolean
    ) => {
    if(!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    if(attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}