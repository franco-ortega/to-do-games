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
    const gamesPerTimeSpan = savedGames[
      timeSpan as TimeSpanPaths
    ] as OldGameData[];
    const firstItem = gamesPerTimeSpan[0];

    if (Array.isArray(firstItem)) {
      gamesPerTimeSpan.forEach(([game, { isPlayed, note }]) => {
        return {
          title: game,
          isPlayed,
          note,
        };
      });
    }
  }

  setGames('GAMES_TO_PLAY', savedGames);
}
