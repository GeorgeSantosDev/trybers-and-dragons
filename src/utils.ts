import { SimpleFighter } from './Fighter';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export default getRandomInt;

export function damageCalculate(attackPoints: number, defense: number): number {
  const damage = attackPoints - defense;
  return damage > 0 ? damage : 1;
}

export function upAttribute(attribute: number): number {
  return attribute + getRandomInt(1, 10); 
}

export function battle(player1: SimpleFighter, player2: SimpleFighter) {
  while (player1.lifePoints !== -1 && player2.lifePoints !== -1) {
    player1.attack(player2);
    player2.attack(player1);
  }
} 