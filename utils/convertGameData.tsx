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
    const currentGames = savedGames[timeSpan as TimeSpanPaths];

    const isOldGameData = Array.isArray(currentGames[0]);

    if (isOldGameData) {
      const currentGamesOldData = currentGames as OldGameData[];

      currentGamesOldData.forEach(([title, { isPlayed, note, notes }]) => {
        return {
          title,
          isPlayed,
          note: note || notes,
        };
      });
    }
  }

  setGames('GAMES_TO_PLAY', savedGames);
}
