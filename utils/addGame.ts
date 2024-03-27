import { getGames } from "./localStorage";
import { TimeSpanPaths } from "./types";

export default function addGame(timeSpanOption: TimeSpanPaths, game: string, note: string) {
  const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: [
        ...savedGames[timeSpanOption],
        [game, { title: game, isPlayed: false, note }],
      ],
    };

    return updatedGames;
}