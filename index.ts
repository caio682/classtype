class Character {
    private name: string;
    stregth: number
    skill: number;
    

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;

    }

    attack() : void {
        console.log(`Attack with ${this.stregth} points`)
    }
}

class Magician extends Character{
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}


const p1 = new Character("Caio", 10, 98);
const p2 = new Magician("Mago", 9,98,1)
p1.attack();