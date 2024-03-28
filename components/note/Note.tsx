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
  toggleEditNote: () => void;
};

export default function Note({
  currentNote,
  setCurrentNote,
  title,
  timeSpan,
  toggleNote,
  toggleEditNote,
}: Props) {
  // const [isEditNote, setIsEditNote] = useState(false);

  // const toggleEditNote = () => {
  //   setIsEditNote((prev) => !prev);
  // };

  // Do no display Note
  // ---- if note exists, display View Note
  // ---- ---- if View Note clicked, display Hide Note, Note and Edit Note
  // ---- ---- ---- if Hide Note clicked, hide Note and display View Note
  // ---- ---- ---- if Edit Note clicked, display EditNote
  // ---- ---- ---- ---- if note added and Save clicked, save note and display updated Note
  // ---- ---- ---- ---- if Cancel clicked, display previous Note
  // ---- if not, display Add Note
  // ---- ---- if Add Note clicked, display Note and display EditNote
  // ---- ---- ---- if note added and Save clicked, save note and display Note
  // ---- ---- ---- if Cancel clicked, hide Note and hide EditNote

  return (
    <div className={styles.Note}>
      <hr />
      {/* {!currentNote && isEditNote ? (
        <EditNote
          toggleEditNote={toggleEditNote}
          titleToEdit={title}
          note={currentNote}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
          toggleNote={toggleNote}
        />
      ) : !isEditNote && currentNote ? ( */}
      <>
        <div>
          <h4>Note</h4>
          <button onClick={toggleEditNote}>Edit Note</button>
        </div>
        <p>{currentNote}</p>
      </>
      {/* ) : (
        <EditNote
          toggleEditNote={toggleEditNote}
          toggleNote={toggleNote}
          titleToEdit={title}
          note={currentNote}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
        />
      )} */}
    </div>
  );
}
