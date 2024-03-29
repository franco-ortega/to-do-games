import { Dispatch, SetStateAction, useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import styles from './EditNote.module.scss';

type Props = {
  currentNote: string;
  setCurrentNote: Dispatch<SetStateAction<string>>;
  titleToEdit: string;
  timeSpanOption: TimeSpanPaths;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
};

export default function EditNote({
  currentNote,
  setCurrentNote,
  titleToEdit,
  timeSpanOption,
  toggleEditNote,
  toggleViewNote,
}: Props) {
  const [newNote, setNewNote] = useState(currentNote);

  const onHandleCancel = () => {
    setNewNote('');
    toggleEditNote();

    if (!currentNote) toggleViewNote();
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map((game) => {
        const { title, isPlayed, note } = getGameProps(game);

        if (title === titleToEdit) {
          return {
            title,
            isPlayed,
            note: newNote,
          };
        }
        return {
          title,
          isPlayed,
          note,
        };
      }),
    };

    setCurrentNote(newNote);
    setGames('GAMES_TO_PLAY', updatedGames);

    if (newNote) {
      toggleEditNote();
    }

    if (!newNote) {
      toggleViewNote();
      toggleEditNote();
    }
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
