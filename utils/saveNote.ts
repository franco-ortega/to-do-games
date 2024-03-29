import { getGames, setGames } from "./localStorage";
import { TimeSpanPaths } from "./types";
import getGameProps from "./getGameProps";

export default function saveNote(noteToEdit: string, timeSpan: TimeSpanPaths, titleToEdit: string ) {

  const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpan]: savedGames[timeSpan].map((game) => {
        const { title, isPlayed } = getGameProps(game);

        if (title === titleToEdit) {
          return {
            title,
            isPlayed,
            note: noteToEdit,
          };
        }

        return game;
      }),
    };
  
    setGames('GAMES_TO_PLAY', updatedGames);
};
