import Character from '../src/js/character.js';

// name, characterClass, strength, intelligence, dexterity, maxHealth, currentHealth, level, experience, money

describe ('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Warrior", 10, 6, 3, 150, 150, 1, 0, 0);
  })

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

  

  
  // test ('', () => {
    
  // });

})

// test ('will allow to choose specific character class from array of character classes', () => {
  //   character.chooseCharClass();
  //   expect(character.characterClass).toEqual("wizard");
  // });

  // test ('should push correct character name onto created character array', () => {
    
    //   character.addCharacter("Kitara");
    //   expect(character.characterCreation).toContain("Kitara");
    // });









// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isoscTriangle = new Triangle(5,5,7)
//     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });