import { Character } from "../src/interfaces/Character"
import { performAttack } from "../src/performAttack"

describe("Unitary validateCharacter test", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        } )

        const attacker: Character = {
            name:"Scorpion",
            life:1500,
            defense: 200,
            strength: 600
        }

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800
        }

        performAttack(attacker, defender, validatorMock as any)

        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "",
            life: 1500,
            defense: 200,
            strength: 600,
        }
      
        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        }

        try {
            performAttack(attacker, defender, validatorMock as any)
        } catch (error:any) {
            expect(error.message).toBe("Invalid Character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    })
})