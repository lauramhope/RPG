
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
// export class Gameplay {
//   constructor(stepAmount, map, triggerTreasure, triggerMonster, )
// } 


// newArea, finishGame

// {strength:10, defense:10, currentHealth:10, experience:0, money:0};
// {strength:2, defense:2, maxHealth:2, currentHealth:2, experience: 100, money:100}

//   attackCharacter() {
//     const attackDamage = this.monster.strength - this.character.defense;
//     this.character.currentHealth -= attackDamage;
//     if (this.character.currentHealth <= 0) {
//       return "You have died.";
//     } else {
//       return "You have " + this.character.currentHealth + " health remaining.";
//     }
//   }
// }

// attackMonster() {
//   const attackDamage = this.character.strength - this.monster.defense;
//   this.monster.currentHealth -= attackDamage;
//   if (this.monster.currentHealth <= 0) {
//     this.character.experience += this.monster.experienceReward;
//     this.character.money += this.monster.moneyReward;
//     return "You have defeated the monster.";
//   } else {
//     return "The monster has " + this.monster.currentHealth + " health remaining.";
//   }
// }
