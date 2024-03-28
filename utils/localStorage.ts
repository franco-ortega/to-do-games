import { GamesToPlay } from "./types";

export function setGames(key: string, value: GamesToPlay) {
  const stringyGames = JSON.stringify(value);
  window.localStorage.setItem(key, stringyGames);  
};

export function getGames(key: string) {
  const stringyGames = window.localStorage.getItem(key);

  // return data from local storage or create new data
  return stringyGames ? JSON.parse(stringyGames) as GamesToPlay : {
    week: [],
    month: [],
    year: []
  } as GamesToPlay;;
};
