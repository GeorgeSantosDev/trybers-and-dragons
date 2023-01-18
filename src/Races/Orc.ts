import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc.instancesCount += 1; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }
}
