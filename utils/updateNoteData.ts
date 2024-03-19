import { getGames, setGames } from "./localStorage";
import { TimeSpanPathOptions } from "./types";

export default function updateNoteData() {

  const savedGames = getGames('GAMES_TO_PLAY');
  
  for (const timeSpan in savedGames) {
    const gamesPerTimeSpan = savedGames[timeSpan as TimeSpanPathOptions]

    if(gamesPerTimeSpan.length) {
      gamesPerTimeSpan.forEach(game => {
        const gameData = game[1];

        // this checks to see if "notes" exists
        if (Object.keys(gameData).includes('notes')) {

          // first - add the "note" variable
          gameData.note = gameData.notes
          
          // second - remove the "notes" variable
          delete gameData.notes
        }
      })
    }
  }

  setGames('GAMES_TO_PLAY', savedGames)
}