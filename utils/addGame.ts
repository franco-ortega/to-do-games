import { getGames } from "./localStorage";
import { TimeSpanPaths } from "./types";

export default function addGame(timeSpan: TimeSpanPaths, game: string, note: string) {
  const savedGames = getGames('GAMES_TO_PLAY');

  const isOldGameData = Array.isArray(savedGames[timeSpan][0])

  return isOldGameData ? {
    ...savedGames,
    [timeSpan]: [
      ...savedGames[timeSpan],
      [game, { isPlayed: false, note }],
    ],
  } : {
    ...savedGames,
    [timeSpan]: [
      ...savedGames[timeSpan],
      { title: game, isPlayed: false, note },
    ]
    };
};
