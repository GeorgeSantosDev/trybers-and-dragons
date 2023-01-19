import Fighter from '../Fighter';
import { battle } from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    battle(this._player1, this._player2);
    return super.fight();
  }
}
