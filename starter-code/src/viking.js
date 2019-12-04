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

    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        let mensaje = ""
        this.health -= damage;
        (this.health > 0 ?
            mensaje = `A Saxon has received ${damage} points of damage` :
            mensaje = `A Saxon has died in combat`)
        return mensaje
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let mensaje = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
        this.saxonArmy[0].health <= 0 ? this.saxonArmy.pop() : null
        return mensaje
    }

    saxonAttack() {
        let mensaje = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
        this.vikingArmy[0].health <= 0 ? this.vikingArmy.pop() : null
        return mensaje
    }

    showStatus() {
        let mensaje = ''
        if (this.saxonArmy.length <= 0) {
            mensaje = `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length <= 0) {
            mensaje = `Saxons have fought for their lives and survived another day...`
        } else {
            mensaje = `Vikings and Saxons are still in the thick of battle.`
        }
        return mensaje
    }
}