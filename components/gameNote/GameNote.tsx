import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import Note from '../note/Note';
import styles from './GameNote.module.scss';

type Props = {
  timeSpan: TimeSpanPaths;
  title: string;
  currentNote: string;
  isEditNote: boolean;
  toggleEditNote: () => void;
  toggleViewNote: () => void;
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
      {isEditNote ? (
        <EditNote
          toggleEditNote={toggleEditNote}
          toggleViewNote={toggleViewNote}
          titleToEdit={title}
          timeSpan={timeSpan}
          currentNote={currentNote}
          updateNote={updateNote}
        />
      ) : (
        <Note note={currentNote} toggleEditNote={toggleEditNote} />
      )}
    </div>
  );
}
