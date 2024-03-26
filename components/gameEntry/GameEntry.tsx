'use client';

import { useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import EditNote from '../editNote/EditNote';
import styles from './GameEntry.module.scss';

type Props = {
  game: string;
  isPlayed: boolean;
  note: string;
  timeSpan: TimeSpanPaths;
};

export default function GameEntry({ game, isPlayed, note, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isOpen, setIsOpen] = useState(false);
  const [isViewNote, setIsViewNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(timeSpan, game, isPlayed, currentNote);
  };

  const toggleNote = () => {
    setIsViewNote((prev) => !prev);
  };

  const handleEditNote = () => {
    setIsOpen(true);
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
      <span>(status: {isChecked ? 'played 🎉' : 'unplayed'})</span>
      <button onClick={toggleNote}>{`${
        isViewNote ? 'Hide' : 'View'
      } Note`}</button>
      <div>
        {isViewNote && (
          <>
            <hr />
            {!isOpen ? (
              <>
                <p>
                  <h4>Note</h4>{' '}
                  <button onClick={handleEditNote}>Edit Note</button>
                </p>
                <p>{currentNote}</p>
              </>
            ) : (
              <EditNote
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                game={game}
                note={currentNote}
                timeSpanOption={timeSpan}
                setCurrentNote={setCurrentNote}
              />
            )}
          </>
        )}
      </div>
    </li>
  );
}
