import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
  }

  set name(value: string) {
    this.name = value;
  }

  set dexterity(value: number) {
    this.dexterity = value;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._instanceCount += 1;
    return Dwarf._instanceCount;
  }
}