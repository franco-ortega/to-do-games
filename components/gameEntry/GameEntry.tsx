'use client';

import { useState } from 'react';
import { TimeSpanPathOptions } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import EditNote from '../editNote/EditNote';
import styles from './GameEntry.module.scss';

type Props = {
  game: string;
  isPlayed: boolean;
  notes: string;
  timeSpan: TimeSpanPathOptions;
};

export default function GameEntry({ game, isPlayed, notes, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(notes);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(timeSpan, game, isPlayed);
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
            <span>Notes</span>: {currentNote}
            <div>
              <button onClick={handleEditNote}>Edit Note</button>
            </div>
          </>
        ) : (
          <EditNote
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            game={game}
            notes={notes}
            timeSpanOption={timeSpan}
            setCurrentNote={setCurrentNote}
          />
        )}
      </div>
    </li>
  );
}
