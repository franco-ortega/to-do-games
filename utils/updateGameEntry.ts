import getGameProps from "./getGameProps";
import { getGames, setGames } from "./localStorage";
import { Game, GamesToPlay, TimeSpanPaths } from "./types";

export default function updateGameEntry(timeSpan: TimeSpanPaths, gameToUpdate: Game) {

  const isOldGameData = Array.isArray(gameToUpdate);

  const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;

  const updatedGames = {
    ...savedGames,
    [timeSpan]: savedGames[timeSpan].map((game) => {
      const { title, isPlayed, note } = getGameProps(game)

      if (isOldGameData ? gameToUpdate[0] : gameToUpdate.title === (title)) {
        return isOldGameData ? [
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
      };

      return game;
    })
  };

  setGames('GAMES_TO_PLAY', updatedGames);
};
