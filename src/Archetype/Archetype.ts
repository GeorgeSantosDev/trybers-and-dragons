export default abstract class Archetype {
  constructor(
    private _name: string,
    private _special = 0,
    private _cost = 0,
  ) {
    this._name = _name;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }
}