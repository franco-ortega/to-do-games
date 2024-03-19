import { getGames, setGames } from "./localStorage";
import { GamesToPlay, TimeSpanPaths } from "./types";

export default function updateGameEntry(pathname: TimeSpanPaths, game: string, isPlayed: boolean, note: string) {

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;

  const updatedGames = {
    ...savedGames,
    [pathname]: savedGames[pathname].map((gameItem) => {
      if (gameItem[0] === (game)) {
        return [
          game,
          {
            isPlayed: !isPlayed,
            note
          },
        ];
      } else return gameItem;
    }),
  };

  setGames('GAMES_TO_PLAY', updatedGames);

}