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

  for (const timeSpan in savedGames) {
    
    const games = savedGames[timeSpan as TimeSpanPathOptions]

    const updatedNote = games.map(game => {

      if (game[1].notes) {
        return [
          game[0],
          {
            isPlayed: game[1].isPlayed,
            note: game[1].notes
          }
        ]
      }

      return game;


    }) as unknown as GamesToPlay;

    console.log(updatedNote)
    
  }
}