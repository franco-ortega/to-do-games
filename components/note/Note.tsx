import { Dispatch, SetStateAction, useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import styles from './Note.module.scss';

type Props = {
  currentNote: string;
  setCurrentNote: Dispatch<SetStateAction<string>>;
  title: string;
  timeSpan: TimeSpanPaths;
  toggleNote: () => void;
};

export default function Note({
  currentNote,
  setCurrentNote,
  title,
  timeSpan,
  toggleNote,
}: Props) {
  const [isEditNote, setIsEditNote] = useState(false);

  const toggleEditNote = () => {
    setIsEditNote((prev) => !prev);
  };

  return (
    <div className={styles.Note}>
      <hr />
      {!currentNote && isEditNote ? (
        <EditNote
          toggleEditNote={toggleEditNote}
          titleToEdit={title}
          note={currentNote}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
          toggleNote={toggleNote}
        />
      ) : !isEditNote && currentNote ? (
        <>
          <div>
            <h4>Note</h4>
            <button onClick={toggleEditNote}>Edit Note</button>
          </div>
          <p>{currentNote}</p>
        </>
      ) : (
        <EditNote
          toggleEditNote={toggleEditNote}
          toggleNote={toggleNote}
          titleToEdit={title}
          note={currentNote}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
        />
      )}
    </div>
  );
}
