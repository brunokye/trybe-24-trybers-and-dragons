import Fighter from '../Fighter/Fighter';

export default abstract class Battle {
  constructor(protected player: Fighter) { }

  public fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}