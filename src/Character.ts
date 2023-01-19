import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt, { upAttribute, damageCalculate } from './utils';

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _race: Race;
  private _archetype: Archetype; 
  private _name: string;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);

    const defaultRace = new Elf(this._name, this._dexterity);
    this._race = race || defaultRace;

    const defaultArchetype = new Mage(this._name);
    this._archetype = archetype || defaultArchetype;

    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);

    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get strength(): number {
    return this._strength;
  }
  
  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = damageCalculate(attackPoints, this._defense);

    if (this._lifePoints <= 0 || this._lifePoints - damage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }
    
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._defense = upAttribute(this._defense);
    this._dexterity = upAttribute(this._dexterity);
    this._strength = upAttribute(this._strength);
    
    const life = upAttribute(this._maxLifePoints);
    
    if (life > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = life;
      this._lifePoints = life;
    }

    this._energy.amount = 10;
  }
}