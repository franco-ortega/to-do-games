'use client';

import { useState } from 'react';
import { TimeSpanPathOptions } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import EditNote from '../editNote/EditNote';
import styles from './GameEntry.module.scss';

type Props = {
  game: string;
  isPlayed: boolean;
  note: string;
  timeSpan: TimeSpanPathOptions;
};

export default function GameEntry({ game, isPlayed, note, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(timeSpan, game, isPlayed, currentNote);
  };

  const handleEditNote = () => {
    setIsOpen(true);
  };
  return (
    <li className={styles.GameEntry}>
      <label htmlFor='game'>
        <div>
          <input
            id='game'
            type='checkbox'
            onChange={isCheckedChange}
            checked={isChecked}
          />
          <h3>{game}</h3>
        </div>
        <span>(status: {isChecked ? 'played 🎉' : 'unplayed'})</span>
      </label>
      <div>
        {!isOpen ? (
          <>
            <span>Note</span>: {currentNote}
            <div>
              <button onClick={handleEditNote}>Edit Note</button>
            </div>
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
      </div>
    </li>
  );
}
