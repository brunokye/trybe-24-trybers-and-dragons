import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instanceCount = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Ranger._instanceCount += 1;
    return Ranger._instanceCount;
  }
}