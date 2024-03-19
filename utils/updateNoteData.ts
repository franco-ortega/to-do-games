import { getGames } from "./localStorage";
import { Game, GamesToPlay, TimeSpanPathOptions } from "./types";

type OldGame = [string, { isPlayed: boolean, notes: string }];

export default function updateNoteData() {
  // change "notes" variable into "note" variable

  const savedGames = getGames('GAMES_TO_PLAY');

  // console.log(savedGames)

  for (const timeSpan in savedGames) {
    console.log(timeSpan)

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