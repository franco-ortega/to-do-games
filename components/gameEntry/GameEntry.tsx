'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import ViewNote from '../buttons/ViewNote';
import Note from '../note/Note';
import styles from './GameEntry.module.scss';

type Props = {
  game: Game;
  timeSpan: TimeSpanPaths;
};

export default function GameEntry({ game, timeSpan }: Props) {
  const [title, { isPlayed, note }] = game;

  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isViewNote, setIsViewNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(note || '');

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);

    // change updateGameEntry to updateGameStatus
    updateGameEntry(timeSpan, title, isPlayed, currentNote);
  };

  const toggleNote = () => {
    setIsViewNote((prev) => !prev);
  };

  return (
    <li className={styles.GameEntry}>
      <label htmlFor={title}>
        <input
          id={title}
          type='checkbox'
          onChange={isCheckedChange}
          checked={isChecked}
        />
        <h3>{title}</h3>
      </label>
      <div>
        <div>
          <p>[status: {isChecked ? 'played 🎉' : 'unplayed'}]</p>
          <ViewNote isViewNote={isViewNote} toggleNote={toggleNote} />
        </div>
        {isViewNote && (
          <Note
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
            title={title}
            timeSpan={timeSpan}
          />
        )}
      </div>
    </li>
  );
}
