import { useEffect, useState } from 'react';

import { Game } from '../../utils/types';
import GamesList from '../gamesList/GamesList';

type Props = {
  gameData: Game[];
  time: string;
};

export default function GamesToPlay({ gameData, time }: Props): JSX.Element {
  return (
    <main>
      <h2>Games To Play This {time}</h2>
      <GamesList gamesList={gameData} />
    </main>
  );
}
