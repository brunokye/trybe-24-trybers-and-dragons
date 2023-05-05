import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
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
    Halfling._instanceCount += 1;
    return Halfling._instanceCount;
  }
}