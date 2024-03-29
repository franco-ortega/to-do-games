import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import Note from '../note/Note';
import styles from './GameNote.module.scss';

type Props = {
  isEditNote: boolean;
  currentNote: string;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
  title: string;
  timeSpan: TimeSpanPaths;
  updateNote: (newNote: string) => void;
};

export default function GameNote({
  isEditNote,
  currentNote,
  toggleEditNote,
  toggleViewNote,
  title,
  timeSpan,
  updateNote,
}: Props) {
  return (
    <div className={styles.GameNote}>
      <hr />
      {!isEditNote ? (
        <Note note={currentNote} toggleEditNote={toggleEditNote} />
      ) : (
        <EditNote
          toggleEditNote={toggleEditNote}
          toggleViewNote={toggleViewNote}
          titleToEdit={title}
          timeSpanOption={timeSpan}
          currentNote={currentNote}
          updateNote={updateNote}
        />
      )}
    </div>
  );
}
