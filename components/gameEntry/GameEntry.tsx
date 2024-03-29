'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import updateGameStatus from '@/utils/updateGameStatus';
import AddNoteBtn from '../buttons/AddNoteBtn';
import ViewNote from '../buttons/ViewNoteBtn';
import Note from '../note/Note';
import EditNote from '../editNote/EditNote';
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
          {currentNote
            ? !isEditNote && (
                <ViewNote isViewNote={isViewNote} toggle={toggleViewNote} />
              )
            : !isViewNote && <AddNoteBtn toggle={toggleAddNote} />}
        </div>
        {isViewNote && (
          <div>
            <hr />
            {!isEditNote ? (
              <Note note={currentNote} toggleEditNote={toggleEditNote} />
            ) : (
              <EditNote
                toggleEditNote={toggleEditNote}
                toggleViewNote={toggleViewNote}
                titleToEdit={title}
                timeSpanOption={timeSpan}
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
              />
            )}
          </div>
        )}
      </div>
    </li>
  );
}
