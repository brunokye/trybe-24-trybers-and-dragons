import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Necromancer._instanceCount += 1;
    return Necromancer._instanceCount;
  }
}