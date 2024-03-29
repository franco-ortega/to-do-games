import { useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import styles from './EditNote.module.scss';
import saveNote from '@/utils/saveNote';
import Button from '../buttons/Button';

type Props = {
  timeSpan: TimeSpanPaths;
  titleToEdit: string;
  currentNote: string;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
  updateCurrentNote: (newNote: string) => void;
};

export default function EditNote({
  timeSpan,
  titleToEdit,
  currentNote,
  toggleEditNote,
  toggleViewNote,
  updateCurrentNote,
}: Props) {
  const [noteToEdit, setNoteToEdit] = useState(currentNote);

  const onSaveClick = () => {
    // save note
    saveNote(noteToEdit, timeSpan, titleToEdit);
    // update note state to re-render ViewNoteBtn text in GameEntry
    updateCurrentNote(noteToEdit);
    // close editor
    toggleEditNote();
    // close note view if note was erased
    if (!noteToEdit) toggleViewNote();
  };

  const onCancelClick = () => {
    toggleEditNote();
    if (!currentNote) toggleViewNote();
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
