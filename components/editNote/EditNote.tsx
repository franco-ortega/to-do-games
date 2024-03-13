import { Dispatch, SetStateAction, useState } from 'react';
import styles from './EditNote.module.scss';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPathOptions } from '@/utils/types';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  game: string;
  notes: string;
  timeSpanOption: TimeSpanPathOptions;
};

export default function EditNote({
  isOpen,
  setIsOpen,
  game,
  notes,
  timeSpanOption,
}: Props) {
  const [newNote, setNewNote] = useState(notes);
  const handleCancel = () => {
    setIsOpen(false);
  };

  const onHandleSave = () => {
    console.log('save note');
    const savedGames = getGames('GAMES_TO_PLAY');
    console.log(savedGames, timeSpanOption);

    // need to update the specific game
    // find time span
    // find game by title - needs id soon
    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map(
        ([currentGame, { isPlayed, notes }]) => {
          if (game === currentGame) {
            return [game, { isPlayed, notes: newNote }];
          }
          return [currentGame, { isPlayed, notes }];
        }
      ),
    };

    setGames('GAMES_TO_PLAY', updatedGames);
    setIsOpen(false);
  };

  return (
    <dialog className={styles.EditNote} open={isOpen}>
      <label htmlFor='edit-note'>
        <p>Note:</p>
        <textarea
          rows={4}
          id='edit-note'
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={onHandleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </label>
    </dialog>
  );
}
