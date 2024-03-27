import { getGames, setGames } from "./localStorage";
import { TimeSpanPaths } from "./types";

export default function updateNoteData() {

  const savedGames = getGames('GAMES_TO_PLAY');
  
  for (const timeSpan in savedGames) {
    const gamesPerTimeSpan = savedGames[timeSpan as TimeSpanPaths]

    if(gamesPerTimeSpan.length) {
      gamesPerTimeSpan.forEach(game => {
        const gameData = Array.isArray(game) ? game[1] : game;

        // this checks to see if "notes" exists
        if (Object.keys(gameData).includes('notes')) {

          // first - add the "note" variable
          gameData.note = Array.isArray(game) ? game[1].notes : game.note; 
          
          // second - remove the "notes" variable
          Array.isArray(game) && delete game[1].notes 
        }
      })
    }
  }

  setGames('GAMES_TO_PLAY', savedGames)
}