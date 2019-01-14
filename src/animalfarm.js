

export class Animal {
    constructor(name, type) {
        this._name = name;
        this._type = type;
        this._health = 100;
        this._happiness = 100;
    }
    setHunger() {
        const hungerInterval = setInterval(() => {
            this._health -= 1;
            if (this.didAnimalDie() == true) {
                clearInterval(hungerInterval);
                return `${this._name} has died!`;
            }
        }, 1000);
    }

    setHappiness() {
        const happyInterval = setInterval(() => {
            this._happiness -= 1;
            if (this.didAnimalDie() == true) {
                clearInterval(happyInterval);
                return `${this._name} has died!`;
            }
        }, 1000);
    }

    didAnimalDie() {
        if (this._health > 0) {
            return false;
        } else {
            return true;
        }
    }
    feed(amount) {

        this._health += amount;
        this._happiness += amount;
        return `The animal ate the food! Food level goes up ${amount}!`
    }

    play(amount) {

        this._health -= amount;
        this._happiness += amount;
        return `The animal ate the food! Food level goes up ${amount}!`
    }
    getName() {

        return this._name;

    }
    getType() {

        return this._type;

    }
    getHunger() {

        return this._health;

    }
    getHappiness() {

        return this._happiness;

    }




}



// Animal.eatSmall = Animal.feed(5);
// Animal.eatMedium = Animal.feed(10);
// Animal.eatLarge = Animal.feed(15);
// Animal.eatYuck = Animal.feed(-10);
// Animal.eatPowerUp = Animal.feed(50);
// Animal.eatSpecialBonus = Animal.feed(100);
// Animal.eatWeirdThing = Animal.feed(Math.floor((Math.random() * 20) + 1));