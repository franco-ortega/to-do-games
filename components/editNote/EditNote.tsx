import { useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import styles from './EditNote.module.scss';

type Props = {
  currentNote: string;
  updateNote: (newNote: string) => void;
  titleToEdit: string;
  timeSpan: TimeSpanPaths;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
};

export default function EditNote({
  currentNote,
  updateNote,
  titleToEdit,
  timeSpan,
  toggleEditNote,
  toggleViewNote,
}: Props) {
  const [noteToEdit, setNoteToEdit] = useState(currentNote);

  const onHandleCancel = () => {
    toggleEditNote();
    if (!currentNote) toggleViewNote();
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpan]: savedGames[timeSpan].map((game) => {
        const { title, isPlayed, note } = getGameProps(game);

        if (title === titleToEdit) {
          return {
            title,
            isPlayed,
            note: noteToEdit,
          };
        }
        return {
          title,
          isPlayed,
          note,
        };
      }),
    };

    updateNote(noteToEdit);
    setGames('GAMES_TO_PLAY', updatedGames);

    if (noteToEdit) {
      toggleEditNote();
    }

    if (!noteToEdit) {
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
          defaultValue={currentNote}
          onChange={(e) => setNoteToEdit(e.target.value)}
        />
        <button onClick={onHandleSave}>Save</button>
        <button onClick={onHandleCancel}>Cancel</button>
      </label>
    </div>
  );
}
