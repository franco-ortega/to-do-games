'use client';

import { useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import EditNote from '../editNote/EditNote';
import styles from './GameEntry.module.scss';
import ViewNote from '../buttons/ViewNote';

type Props = {
  game: string;
  isPlayed: boolean;
  note: string;
  timeSpan: TimeSpanPaths;
};

export default function GameEntry({ game, isPlayed, note, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isEditNote, setIsEditNote] = useState(false);
  const [isViewNote, setIsViewNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);

    // change updateGameEntry to updateGameStatus
    updateGameEntry(timeSpan, game, isPlayed, currentNote);
  };

  const toggleNote = () => {
    setIsViewNote((prev) => !prev);
  };

  const toggleEditNote = () => {
    setIsEditNote((prev) => !prev);
  };

  return (
    <li className={styles.GameEntry}>
      <label htmlFor={game}>
        <input
          id={game}
          type='checkbox'
          onChange={isCheckedChange}
          checked={isChecked}
        />
        <h3>{game}</h3>
      </label>
      <div>
        <p>[status: {isChecked ? 'played 🎉' : 'unplayed'}]</p>
        <ViewNote isViewNote={isViewNote} toggleNote={toggleNote} />
      </div>

      {isViewNote && (
        <>
          <hr />
          {!isEditNote ? (
            <>
              <p>
                <h4>Note</h4>{' '}
                <button onClick={toggleEditNote}>Edit Note</button>
              </p>
              <p>{currentNote}</p>
            </>
          ) : (
            <EditNote
              isEditNote={isEditNote}
              toggleEditNote={toggleEditNote}
              game={game}
              note={currentNote}
              timeSpanOption={timeSpan}
              setCurrentNote={setCurrentNote}
            />
          )}
        </>
      )}
    </li>
  );
}
