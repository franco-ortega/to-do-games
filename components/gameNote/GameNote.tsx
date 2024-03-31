import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import Note from '../note/Note';
import styles from './GameNote.module.scss';
import EditNoteBtn from '../buttons/EditNoteBtn';

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
  const closeEditNote = (noteToCheck: string) => {
    // close editor
    toggleEditNote();
    // close note view if there is no note was erased
    if (!noteToCheck) toggleViewNote();
  };

  return (
    <div className={styles.GameNote}>
      <hr />
      <div>
        <h4>Note</h4>
        <EditNoteBtn toggle={toggleEditNote} />
      </div>
      {isEditNote ? (
        <EditNote
          titleToEdit={title}
          timeSpan={timeSpan}
          currentNote={currentNote}
          closeEditNote={closeEditNote}
          updateCurrentNote={updateCurrentNote}
        />
      ) : (
        <Note note={currentNote} />
      )}
    </div>
  );
}
