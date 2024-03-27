import { getGames, setGames } from "./localStorage";
import { Game, GamesToPlay, TimeSpanPaths } from "./types";

export default function updateGameEntry(pathname: TimeSpanPaths, game: Game) {

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;

  const updatedGames = {
    ...savedGames,
    [pathname]: savedGames[pathname].map((gameItem) => {
      const title = Array.isArray(game) ? game[0] : game.title;
      const isPlayed = Array.isArray(game) ? game[1].isPlayed : game.isPlayed;
      const note = Array.isArray(game) ? game[1].note : game.note;

      if (Array.isArray(game) ? game[0] : game.title === (title)) {
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
};
