import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerA: Character | Fighter;
  private _playerB: Character | Fighter;

  constructor(
    playerA: Character | Fighter, 
    playerB: Character | Fighter,
  ) {
    super(playerA);
    
    this._playerA = playerA;
    this._playerB = playerB;
  }

  public fight(): number {
    const { _playerA: A, _playerB: B } = this;

    while (A.lifePoints !== -1 && B.lifePoints !== -1) {
      this._playerA.attack(B);
      this._playerB.attack(A);
    }

    return super.fight();
  }
}