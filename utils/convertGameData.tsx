import { getGames, setGames } from './localStorage';
import { Game, GamesToPlay, TimeSpanPaths } from './types';

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
  const newGameData = {} as GamesToPlay;

  for (const timeSpan in savedGames) {
    const currentTimeSpan = timeSpan as TimeSpanPaths;
    const currentGames = savedGames[currentTimeSpan];

    const isOldGameData = Array.isArray(currentGames[0]);

    if (isOldGameData) {
      const currentGamesOldData = currentGames as OldGameData[];

      const currentGamesNewData = currentGamesOldData.map(
        ([title, { isPlayed, note, notes }]) => {
          return {
            title,
            isPlayed,
            note: note || notes,
          };
        }
      ) as Game[];

      newGameData[currentTimeSpan] = currentGamesNewData;
    }
  }

  setGames('GAMES_TO_PLAY', newGameData);
}
