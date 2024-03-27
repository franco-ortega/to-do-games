import { getGames, setGames } from './localStorage';
import { TimeSpanPaths } from './types';

type OldGameData = [
  string,
  {
    isPlayed: boolean;
    note?: string;
    notes?: string;
  }
];

export default function convertGameData() {
  const savedGames = getGames('GAMES_TO_PLAY');

  for (const timeSpan in savedGames) {
    const isOldGameData = Array.isArray(
      savedGames[timeSpan as TimeSpanPaths][0]
    );

    if (isOldGameData) {
      const gamesPerTimeSpan = savedGames[
        timeSpan as TimeSpanPaths
      ] as OldGameData[];

      gamesPerTimeSpan.forEach((game) => {
        return {
          title: game[0],
          isPlayed: game[1].isPlayed,
          note: game[1].note || game[1].notes,
        };
      });
    }
  }

  setGames('GAMES_TO_PLAY', savedGames);
}
