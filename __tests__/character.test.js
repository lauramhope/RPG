import { Character, Monster, Battle } from '../src/js/character.js';

describe ('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Warrior", 10, 6, 3, 150, 150, 1, 0, 0);
  });

  test ('should create a character object with assigned properties', () => {
    // expect(character.name).toEqual("Zuko");
    expect(character.characterClass).toEqual("Warrior");
    expect(character.strength).toEqual(10);
    expect(character.intelligence).toEqual(6);
    expect(character.dexterity).toEqual(3);
    expect(character.maxHealth).toEqual(150);
    expect(character.currentHealth).toEqual(150);
    expect(character.level).toEqual(1);
    expect(character.experience).toEqual(0);
    expect(character.money).toEqual(0);
  });

  test ('should show character moving up each level', () => {
    character.levelUp();
    expect(character.level).toBeGreaterThan(1);
    expect(character.dexterity).toBeGreaterThan(3);
    expect(character.strength).toBeGreaterThan(10);
    expect(character.intelligence).toBeGreaterThan(6);
    expect(character.currentHealth).toBeGreaterThan(150);
    expect(character.maxHealth).toBeGreaterThan(150);
  });
});
  
describe ('Monster', () => {
  let monster;

  beforeEach(() => {
    monster = new Monster("Fire Nation Soldier", 2, 2, 3, 3, 100, 100);
  });

  test ('should create a monster object with assigned properties', () => {
    expect(monster.name).toEqual("Fire Nation Soldier");
    expect(monster.strength).toEqual(2);
    expect(monster.defense).toEqual(2);
    expect(monster.maxHealth).toEqual(3);
    expect(monster.currentHealth).toEqual(3);
    expect(monster.experienceReward).toEqual(100);
    expect(monster.moneyReward).toEqual(100);
  });
})


describe ('Battle', () => {
  let battle;

  beforeEach(() => {
  const character = {
      strength: 10,
      defense: 2,
      currentHealth: 150,
      experience: 0,
      money: 0
    };
    const monster = {
      strength: 3,
      defense: 2,
      currentHealth: 8,
      experienceReward: 100,
      moneyReward: 100
    };
  battle = new Battle(character, monster);
  });
  
  test('should decrease monster health by monster strength minus character defense', () => {
    const expectedHeroDamage= battle.character.strength - battle.monster.defense;
    const expectedMonsterHealth = battle.monster.currentHealth - expectedHeroDamage;
    const newExperience = battle.character.experience + battle.monster.experienceReward;
    const newMoney = battle.character.money + battle.monster.moneyReward;
    const expectedMonsterDamage = battle.monster.strength - battle.character.defense;
    const expectedHeroHealth = battle.character.currentHealth - expectedMonsterDamage;
    battle.battleAttack();
    expect(expectedMonsterHealth).toBe(battle.monster.currentHealth);
    expect(battle.character.experience).toBe(newExperience);
    expect(battle.character.money).toBe(newMoney);
    expect(expectedHeroHealth).toBeLessThan(battle.character.currentHealth);
  });
});


  


















// this.name = name;
// this.strength = strength;
// this.defense = defense;
// this.maxHealth = maxHealth;
// this.currentHealth = currentHealth;
// this.experienceReward = experienceReward;
// this.moneyReward = moneyReward;
// }
  

// describe ('Game', () => {
//   let game;

//   beforeEach(() => {
//     game = new Game();
//   });
  
  // test ("should assign characterStyle to the player")





  // test ('should assign id to character', () => {
  //   const newCharacter = { name: "Kitara"};
  //   game.addCharacter(newCharacter);
  //   expect(newCharacter.id).toEqual(1); 
  // }); 

  // test ('should add a character to the game object', () => {
  //   const newCharacter1 = { name: "Iroh", name: "Kitara"}; 
  //   game.addCharacter(newCharacter1);
  //   expect(game.characterCreation).toEqual({1: "Iroh", 2: "Jeff"});
  // });

  // test ('should assign characters to new game', () => {
  //   const newCharacter = { name: "Kitara"};
  //   game.addCharacter(newCharacter);
  //   expect(game.characterCreation).toEqual({1: newCharacter});
  // });

  //   expect(game.characterCreation).toContain("Kitara", "Jeff");
  // });