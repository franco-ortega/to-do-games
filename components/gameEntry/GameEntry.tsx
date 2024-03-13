'use client';

import { useEffect, useState } from 'react';
import styles from './GameEntry.module.scss';
import updateGameEntry from '@/utils/updateGameEntry';
import { TimeSpanPathOptions } from '@/utils/types';
import EditNote from '../editNote/EditNote';

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
    console.log('edit note');
    setIsOpen(true);
  };

  useEffect(() => {
    console.log('USE');
  }, [notes, isOpen]);

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
        <div>
          <span>(status: {isChecked ? 'played 🎉' : 'unplayed'})</span>
        </div>
        <div>
          <span>Notes</span>: {currentNote}
          <div>
            <button onClick={handleEditNote}>Edit Note</button>
          </div>
        </div>
      </label>
      {isOpen && (
        <EditNote
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          game={game}
          notes={notes}
          timeSpanOption={timeSpan}
          setCurrentNote={setCurrentNote}
        />
      )}
    </li>
  );
}
