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
