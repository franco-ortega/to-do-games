import { GamesToPlay } from "./types";

export function setGames(key: string, value: GamesToPlay) {
  const stringyGames = JSON.stringify(value);
    localStorage.setItem(key, stringyGames);
}
