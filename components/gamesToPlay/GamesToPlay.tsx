import { Game, GamesToPlay, TimeSpanOptions } from '../../utils/types';
import GamesList from '../gamesList/GamesList';
import { getGames } from '@/utils/localStorage';

type Props = {
  gameData: Game[];
  timeSpan: TimeSpanOptions;
};

export default function GamesToPlay({
  gameData,
  timeSpan,
}: Props): JSX.Element {
  const currentGames = getGames('GAMES_TO_PLAY');
  const time = timeSpan.toLowerCase() as TimeSpanOptions;
  const gameInfo = currentGames[time] ? currentGames[time] : [];

  return (
    <main>
      <h2>Games To Play This {timeSpan}</h2>
      <GamesList gamesList={gameInfo} />
    </main>
  );
}
