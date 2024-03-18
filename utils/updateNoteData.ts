import { getGames } from "./localStorage";
import { GamesToPlay, TimeSpanPathOptions } from "./types";

type OldGame = [string, { isPlayed: boolean, notes: string }];

export default function updateNoteData() {
  // change "notes" variable into "note" variable

  const savedGames = getGames('GAMES_TO_PLAY') as unknown as {
    week: OldGame[],
    month: OldGame[],
    year: OldGame[]
  };

  
}