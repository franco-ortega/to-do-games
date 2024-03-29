import { Dispatch, SetStateAction, useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import EditNote from '../editNote/EditNote';
import styles from './Note.module.scss';

type Props = {
  currentNote: string;
  setCurrentNote: Dispatch<SetStateAction<string>>;
  title: string;
  timeSpan: TimeSpanPaths;
};

export default function Note({
  currentNote,
  setCurrentNote,
  title,
  timeSpan,
}: Props) {
  const [isEditNote, setIsEditNote] = useState(false);

  const toggleEditNote = () => {
    setIsEditNote((prev) => !prev);
  };

  return (
    <div className={styles.Note}>
      <hr />
      {!isEditNote ? (
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
          title={title}
          note={currentNote}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
        />
      )}
    </div>
  );
}
