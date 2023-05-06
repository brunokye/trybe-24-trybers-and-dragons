import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public attack(enemy: SimpleFighter): number {
    return enemy.lifePoints - this.strength;
  }

  public receiveDamage(attackPoints: number): number {
    const verifyHp = attackPoints - this.lifePoints;
    
    if (verifyHp <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}