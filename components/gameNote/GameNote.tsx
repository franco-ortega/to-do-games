import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import Note from '../note/Note';
import styles from './GameNote.module.scss';
import EditNoteBtn from '../buttons/EditNoteBtn';
import Button from '../buttons/Button';
import { useState } from 'react';
import saveNote from '@/utils/saveNote';

type Props = {
  timeSpan: TimeSpanPaths;
  title: string;
  currentNote: string;
  isEditNote: boolean;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
  updateCurrentNote: (newNote: string) => void;
};

export default function GameNote({
  isEditNote,
  currentNote,
  toggleEditNote,
  toggleViewNote,
  title,
  timeSpan,
  updateCurrentNote,
}: Props) {
  const [noteToEdit, setNoteToEdit] = useState(currentNote);

  const closeEditNote = (noteToCheck: string) => {
    // close editor
    toggleEditNote();
    // close note view if there is no note was erased
    if (!noteToCheck) toggleViewNote();
  };

  const onSaveClick = () => {
    // save note
    saveNote(noteToEdit, timeSpan, title);
    // update note state to re-render ViewNoteBtn text in GameEntry
    updateCurrentNote(noteToEdit);
    closeEditNote(noteToEdit);
  };

  const onCancelClick = () => {
    closeEditNote(noteToEdit);
  };

  const onEditNote = (noteToEdit: string) => {
    setNoteToEdit(noteToEdit);
  };

  return (
    <div className={styles.GameNote}>
      <hr />
      <div>
        <h4>Note</h4>
        <div>{!isEditNote && <EditNoteBtn toggle={toggleEditNote} />}</div>
      </div>
      {isEditNote ? (
        <div>
          <EditNote
            titleToEdit={title}
            timeSpan={timeSpan}
            currentNote={currentNote}
            onEditNote={onEditNote}
          />
          <div>
            <Button handler={onSaveClick} text={'Save'} />
            <Button handler={onCancelClick} text={'Cancel'} />
          </div>
        </div>
      ) : (
        <Note note={currentNote} />
      )}
    </div>
  );
}
