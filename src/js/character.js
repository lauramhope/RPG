
export class Character {
  constructor(characterClass, strength, intelligence, dexterity, maxHealth, currentHealth, level, experience, money) {
    this.characterClass = characterClass;
    this.strength = strength;
    this.intelligence = intelligence;
    this.dexterity = dexterity;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.level = level;
    this.experience = experience;
    this.money = money;
    // this.inventory = new Inventory(10);
  }

  levelUp() {
    this.level++;
    this.strength += 2;
    this.intelligence += 2;
    this.dexterity += 2;
    this.maxHealth += 10;
    this.currentHealth = this.maxHealth;
  }
}

export class Monster {
  constructor(name, strength, defense, maxHealth, currentHealth, experienceReward, moneyReward) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth;
    this.experienceReward = experienceReward;
    this.moneyReward = moneyReward;
  }
}


export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
  }

  battleAttack() {
    const attackDamage = this.character.strength - this.monster.defense;
    this.monster.currentHealth -= attackDamage;
    if (this.monster.currentHealth <= 0) {
      this.character.experience += this.monster.experienceReward;
      this.character.money += this.monster.moneyReward;
      return "You have defeated the monster.";
    } else {
      return "The monster has " + this.monster.currentHealth + " health remaining.";
    }
  }
}
export class Gameplay {
  constructor(stepAmount, map) {
    this.stepAmount = step;
    this.map = map;
  }
//   newArea(){
//     this.stepAmount += 1;

//   }
// } 


// newArea, finishGame, triggerTreasure, triggerMonster, experience > x, increase 1 (increase health strength)

