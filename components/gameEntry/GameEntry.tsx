'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import updateGameStatus from '@/utils/updateGameStatus';
import AddNoteBtn from '../buttons/AddNoteBtn';
import ViewNoteBtn from '../buttons/ViewNoteBtn';
import GameNote from '../gameNote/GameNote';
import styles from './GameEntry.module.scss';

type Props = {
  game: Game;
  timeSpan: TimeSpanPaths;
};

export default function GameEntry({ game, timeSpan }: Props) {
  const { title, isPlayed, note } = getGameProps(game);

  const [isChecked, setIsChecked] = useState(isPlayed);
  const [isViewNote, setIsViewNote] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);
  const [currentNote, setCurrentNote] = useState(note);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameStatus(timeSpan, game);
  };

  const toggleViewNote = () => {
    setIsViewNote((prev) => !prev);
  };

  const toggleEditNote = () => {
    setIsEditNote((prev) => !prev);
  };

  const toggleAddNote = () => {
    setIsViewNote((prev) => !prev);
    setIsEditNote((prev) => !prev);
  };

  const updateCurrentNote = (newNote: string) => {
    setCurrentNote(newNote);
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
          {isEditNote ? null : currentNote ? (
            <ViewNoteBtn isViewNote={isViewNote} toggle={toggleViewNote} />
          ) : (
            <AddNoteBtn toggle={toggleAddNote} />
          )}
        </div>
        {isViewNote && (
          <GameNote
            timeSpan={timeSpan}
            title={title}
            isEditNote={isEditNote}
            currentNote={currentNote}
            toggleEditNote={toggleEditNote}
            toggleViewNote={toggleViewNote}
            updateCurrentNote={updateCurrentNote}
          />
        )}
      </div>
    </li>
  );
}
