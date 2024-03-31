import { useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import saveNote from '@/utils/saveNote';
import Button from '../buttons/Button';
import styles from './EditNote.module.scss';

type Props = {
  timeSpan: TimeSpanPaths;
  titleToEdit: string;
  currentNote: string;
  closeEditNote: (noteToCheck: string) => void;
  updateCurrentNote: (newNote: string) => void;
};

export default function EditNote({
  timeSpan,
  titleToEdit,
  currentNote,
  closeEditNote,
  updateCurrentNote,
}: Props) {
  const [noteToEdit, setNoteToEdit] = useState(currentNote);

  const onSaveClick = () => {
    // save note
    saveNote(noteToEdit, timeSpan, titleToEdit);
    // update note state to re-render ViewNoteBtn text in GameEntry
    updateCurrentNote(noteToEdit);
    closeEditNote(noteToEdit);
  };

  const onCancelClick = () => {
    closeEditNote(noteToEdit);
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
        <Button handler={onSaveClick} text={'Save'} />
        <Button handler={onCancelClick} text={'Cancel'} />
      </label>
    </div>
  );
}
