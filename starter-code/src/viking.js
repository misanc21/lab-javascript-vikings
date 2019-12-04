// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        //return `${name} has received ${damage} points of damage`
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        let message = ''
        this.health -= damage
        this.health > 0 ?
            message = `${this.name} has received ${damage} points of damage` : message = `${this.name} has died in act of combat`
        return message
    }

}

// Saxon
class Saxon {}

// War
class War {}