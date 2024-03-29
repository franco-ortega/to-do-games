import { useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import styles from './EditNote.module.scss';
import saveNote from '@/utils/saveNote';

type Props = {
  timeSpan: TimeSpanPaths;
  titleToEdit: string;
  currentNote: string;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
  updateNote: (newNote: string) => void;
};

export default function EditNote({
  timeSpan,
  titleToEdit,
  currentNote,
  toggleEditNote,
  toggleViewNote,
  updateNote,
}: Props) {
  const [noteToEdit, setNoteToEdit] = useState(currentNote);

  const onHandleCancel = () => {
    toggleEditNote();
    if (!currentNote) toggleViewNote();
  };

  const onHandleSave = () => {
    saveNote(noteToEdit, timeSpan, titleToEdit);

    updateNote(noteToEdit);

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
