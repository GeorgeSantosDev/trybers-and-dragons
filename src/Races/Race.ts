export default abstract class Race {
  // private static instancesCount = 0;

  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;

    Race.createdRacesInstances();
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): void {
    throw new Error(' Not implemented');
  }

  abstract maxLifePoints(): number;
}
