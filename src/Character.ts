import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const dexterity = getRandomInt(1, 10);
    const elf = new Elf(name, dexterity);
    const mage = new Mage(name);
    
    this._race = elf;
    this._archetype = mage;
    this._maxLifePoints = elf.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = dexterity;
    this._energy = { type_: mage.energyType, amount: getRandomInt(1, 10) };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public attack(enemy: Fighter): number {
    return enemy.lifePoints - this.strength;
  }

  public special(enemy: Fighter): number {
    return enemy.lifePoints - (this.strength * 3);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    const verifyHp = new Elf('test', 1);

    if (this._maxLifePoints > verifyHp.maxLifePoints) {
      this._maxLifePoints = verifyHp.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }
}