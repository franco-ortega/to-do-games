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
  setCurrentNote: Dispatch<SetStateAction<string>>;
};

export default function EditNote({
  isOpen,
  setIsOpen,
  game,
  notes,
  timeSpanOption,
  setCurrentNote,
}: Props) {
  const [newNote, setNewNote] = useState(notes);

  const onHandleCancel = () => {
    setIsOpen(false);
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map(
        ([selectedGame, { isPlayed, notes }]) => {
          if (game === selectedGame) {
            return [game, { isPlayed, notes: newNote }];
          }
          return [selectedGame, { isPlayed, notes }];
        }
      ),
    };

    setCurrentNote(newNote);
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
        <button onClick={onHandleCancel}>Cancel</button>
      </label>
    </dialog>
  );
}
