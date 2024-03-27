import { Dispatch, SetStateAction, useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import styles from './EditNote.module.scss';

type Props = {
  toggleEditNote: () => void;
  title: string;
  note: string;
  timeSpanOption: TimeSpanPaths;
  setCurrentNote: Dispatch<SetStateAction<string>>;
};

export default function EditNote({
  toggleEditNote,
  title,
  note,
  timeSpanOption,
  setCurrentNote,
}: Props) {
  const [newNote, setNewNote] = useState(note);

  const onHandleCancel = () => {
    toggleEditNote();
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map(
        ([selectedGame, { isPlayed, note }]) => {
          if (title === selectedGame) {
            return [title, { isPlayed, note: newNote }];
          }
          return [selectedGame, { isPlayed, note }];
        }
      ),
    };

    setCurrentNote(newNote);
    setGames('GAMES_TO_PLAY', updatedGames);
    toggleEditNote();
  };

  return (
    <div className={styles.EditNote}>
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
    </div>
  );
}
