import { useEffect, useState } from 'react';

import { Game } from '../../utils/types';
import GamesList from '../gamesList/GamesList';

type Props = {
  gameData: Game[];
  timeSpan: string;
};

export default function GamesToPlay({
  gameData,
  timeSpan,
}: Props): JSX.Element {
  return (
    <main>
      <h2>Games To Play This {timeSpan}</h2>
      <GamesList gamesList={gameData} />
    </main>
  );
}
