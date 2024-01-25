import { GamesToPlay } from "./types";

export function setGames(key: string, value: GamesToPlay) {
  const stringyGames = JSON.stringify(value);
    window.localStorage.setItem(key, stringyGames);
};

export function getGames(key: string) {
  const stringyGames = window.localStorage.getItem(key);

  if(stringyGames) {
    const parsedGames: GamesToPlay = JSON.parse(stringyGames);
    return parsedGames
  }

  return {} as GamesToPlay;
};