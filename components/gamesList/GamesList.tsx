import { useEffect, useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import Loading from '../loading/Loading';
import GameEntry from '../gameEntry/GameEntry';
import styles from './GamesList.module.scss';

type Props = {
  gamesList: Game[];
  timeSpan: TimeSpanPaths;
};

type OldGameData = [
  string,
  {
    isPlayed: boolean;
    note?: string;
    notes?: string;
  }
];

type NewGameData = {
  title: string;
  isPlayed: boolean;
  note: string;
};

export default function GamesList({ gamesList, timeSpan }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gamesList) setLoading(false);
  }, [gamesList]);

  if (loading) return <Loading />;

  return (
    <ul className={styles.GamesList}>
      {
        // check if there is data in the game list -> Game[]
        gamesList.length
          ? // if so, check if the first item is an array
            Array.isArray(gamesList[0])
            ? // if so, display data as array items
              gamesList.map((game) => (
                <GameEntry
                  key={Array.isArray(game) ? game[0] : game.title}
                  game={game}
                  timeSpan={timeSpan}
                />
              ))
            : // if not, display data as object items
              gamesList.map((game) => (
                <GameEntry
                  key={Array.isArray(game) ? game[0] : game.title}
                  game={game}
                  timeSpan={timeSpan}
                />
              ))
          : // if not, display 'No games yet' message
            'No games yet.'
      }
    </ul>
  );
}
