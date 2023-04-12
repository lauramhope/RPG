import Character from '../src/js/character.js';

// name, characterClass, strength, intelligence, dexterity, maxHealth, currentHealth, level, experience, money

describe ('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character();
  })

  test ('should create a character object with assigned properties', () => {
    const newCharacter = ("Zuko", "Warrior", 10, 6, 3, 150, 150, 1, 0, 0);
    expect(newCharacter.name).toEqual("Zuko");
    expect(newCharacter.characterClass).toEqual("Warrior");
    expect(newCharacter.strength).toEqual(10);
    expect(newCharacter.intelligence).toEqual(6);
    expect(newCharacter.dexterity).toEqual(3);
    expect(newCharacter.maxHealth).toEqual(150);
    expect(newCharacter.currentHealth).toEqual(150);
    expect(newCharacter.level).toEqual(1);
    expect(newCharacter.experience).toEqual(0);
    expect(newCharacter.money).toEqual(0);
  });

  // test ('')

})








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