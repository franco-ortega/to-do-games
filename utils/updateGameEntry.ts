import { getGames, setGames } from "./localStorage";
import { GamesToPlay, TimeSpanPathOptions } from "./types";

export default function updateGameEntry(pathname: TimeSpanPathOptions, game: string, isPlayed: boolean) {

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;

  const updatedGames = {
    ...savedGames,
    [pathname]: savedGames[pathname].map((gameItem) => {
      if (gameItem[0] === (game)) {
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