
export default class Character {
  constructor(name, characterClass, strength, intelligence, dexterity, maxHealth, currentHealth, level, experience, money) {
    this.name = name;
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





// export default class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }    
// }