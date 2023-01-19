import Fighter, { SimpleFighter } from '../Fighter';
import { battle } from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _mobs: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, mobs: (SimpleFighter | Fighter)[]) {
    super(player);

    this._player = player;
    this._mobs = mobs;
  }

  fight(): number {
    this._mobs.forEach((mob) => {
      battle(this._player, mob);

      if (this._player.lifePoints === -1) super.fight();
    });

    return super.fight();
  }
}
