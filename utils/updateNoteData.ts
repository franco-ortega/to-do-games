import { getGames } from "./localStorage";
import { TimeSpanPathOptions } from "./types";

export default function updateNoteData() {

  const savedGames = getGames('GAMES_TO_PLAY');
  
  for (const timeSpan in savedGames) {
    const gamesPerTimeSpan = savedGames[timeSpan as TimeSpanPathOptions]
    console.log(gamesPerTimeSpan)

    if(gamesPerTimeSpan.length) {
      gamesPerTimeSpan.forEach(game => {
        const gameData = game[1];

        // this checks to see if "notes" exists
        if (Object.keys(gameData).includes('notes')) {

          // first - add the "note" variable
          gameData.note = gameData.notes
          
          // second - remove the "notes" variable
          delete gameData.notes

          console.log(gameData);
        }

      })

    }

  }


  ////////////////////////////////////////////////////////////

  // const savedGames = getGames('GAMES_TO_PLAY') as unknown as {
  //   week: OldGame[],
  //   month: OldGame[],
  //   year: OldGame[]
  // };

  // type updatedGamesType = {
  //   week: Game[]
  //   month: Game[]
  //   year: Game[]
  // }


  // const updatedGames: updatedGamesType = {
  //   week: [],
  //   month: [],
  //   year: [],
  // }

  // for (const timeSpan in savedGames) {
    
  //   const games = savedGames[timeSpan as keyof GamesToPlay]

  //   updatedGames[timeSpan] = games.map(game => {

  //     if (game[1].notes) {
  //       return [
  //         game[0],
  //         {
  //           isPlayed: game[1].isPlayed,
  //           note: game[1].notes
  //         }
  //       ]
  //     }

  //     return game;


  //   }) as unknown as GamesToPlay;

  //   console.log(updatedGames)

    
    
  // }

  // console.log(savedGames)
}