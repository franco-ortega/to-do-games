import { Dispatch, SetStateAction, useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import styles from './EditNote.module.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  game: string;
  note: string;
  timeSpanOption: TimeSpanPaths;
  setCurrentNote: Dispatch<SetStateAction<string>>;
};

export default function EditNote({
  isOpen,
  setIsOpen,
  game,
  note,
  timeSpanOption,
  setCurrentNote,
}: Props) {
  const [newNote, setNewNote] = useState(note);

  const onHandleCancel = () => {
    setIsOpen(false);
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map(
        ([selectedGame, { isPlayed, note }]) => {
          if (game === selectedGame) {
            return [game, { isPlayed, note: newNote }];
          }
          return [selectedGame, { isPlayed, note }];
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
