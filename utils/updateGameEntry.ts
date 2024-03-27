import { getGames, setGames } from "./localStorage";
import { Game, GamesToPlay, TimeSpanPaths } from "./types";

export default function updateGameEntry(pathname: TimeSpanPaths, gameToUpdate: Game) {

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;

  const updatedGames = {
    ...savedGames,
    [pathname]: savedGames[pathname].map((game) => {
      const title = Array.isArray(game) ? game[0] : game.title;
      const isPlayed = Array.isArray(game) ? game[1].isPlayed : game.isPlayed;
      const note = Array.isArray(game) ? game[1].note : game.note;

      if (Array.isArray(gameToUpdate) ? gameToUpdate[0] : gameToUpdate.title === (title)) {
        return Array.isArray(gameToUpdate) ? [
          title,
          {
            isPlayed: !isPlayed,
            note
          }
        ] : 
        {
          title,
          isPlayed: !isPlayed,
          note
        };
      } else return game;
    }),
  };

  setGames('GAMES_TO_PLAY', updatedGames);
};
