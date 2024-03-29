import { Game } from "./types";

export default function getGameProps(game: Game) {

  return {
    title: Array.isArray(game) ? game[0] : game.title,
    isPlayed: Array.isArray(game) ? game[1].isPlayed : game.isPlayed,
    note: Array.isArray(game) ? game[1].note : game.note
  }
};
