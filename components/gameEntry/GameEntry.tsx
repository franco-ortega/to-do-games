'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import updateGameStatus from '@/utils/updateGameStatus';
import AddNoteBtn from '../buttons/AddNoteBtn';
import ViewNoteBtn from '../buttons/ViewNoteBtn';
import Note from '../note/Note';
import EditNote from '../editNote/EditNote';
import styles from './GameEntry.module.scss';
import GameNote from '../gameNote/GameNote';

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

  const updateNote = (newNote: string) => {
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
          {currentNote
            ? !isEditNote && (
                <ViewNoteBtn isViewNote={isViewNote} toggle={toggleViewNote} />
              )
            : !isViewNote && <AddNoteBtn toggle={toggleAddNote} />}
          {/* ? !isEditNote && (
                <ViewNoteBtn isViewNote={isViewNote} toggle={toggleViewNote} />
              )
            : !isViewNote && <AddNoteBtn toggle={toggleAddNote} />} */}
        </div>
        {isViewNote && (
          <GameNote
            isEditNote={isEditNote}
            toggleEditNote={toggleEditNote}
            toggleViewNote={toggleViewNote}
            title={title}
            timeSpan={timeSpan}
            currentNote={currentNote}
            updateNote={updateNote}
          />
          // <div>
          //   <hr />
          //   {!isEditNote ? (
          //     <Note note={currentNote} toggleEditNote={toggleEditNote} />
          //   ) : (
          //     <EditNote
          //       toggleEditNote={toggleEditNote}
          //       toggleViewNote={toggleViewNote}
          //       titleToEdit={title}
          //       timeSpanOption={timeSpan}
          //       currentNote={currentNote}
          //       updateNote={updateNote}
          //     />
          //   )}
          // </div>
        )}
      </div>
    </li>
  );
}
