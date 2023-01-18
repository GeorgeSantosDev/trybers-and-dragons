import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    private _name: string,
    private _race?: Race, 
    private _archetype?: Archetype, 
  ) {
    this._name = _name;
    this._dexterity = getRandomInt(1, 10);

    const defaultRace = new Elf(this._name, this._dexterity);
    this._race = _race || defaultRace; 

    const defaultArchetype = new Mage(this._name);
    this._archetype = _archetype || defaultArchetype;

    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);

    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
}