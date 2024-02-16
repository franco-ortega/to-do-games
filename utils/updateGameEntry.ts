import { getGames, setGames } from "./localStorage";
import { GamesToPlay, TimeSpanOptions } from "./types";

export default function updateGameEntry(pathname: string, game: string, isPlayed: boolean) {

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;
  const timeSpan = pathname.slice(1) as TimeSpanOptions;

  const updatedGames = {
    ...savedGames,
    [timeSpan]: savedGames[timeSpan].map((gameItem) => {
      if (gameItem[0] === (game as unknown as string)) {
        return [
          game,
          {
            isPlayed: !isPlayed,
          },
        ];
      } else return gameItem;
    }),
  };

  setGames('GAMES_TO_PLAY', updatedGames);

}