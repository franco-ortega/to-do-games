'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import getGameProps from '@/utils/getGameProps';
import ViewNote from '../buttons/ViewNote';
import AddNoteBtn from '../buttons/AddNoteBtn';
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
  const [currentNote, setCurrentNote] = useState(note || '');

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);

    // change updateGameEntry to updateGameStatus
    updateGameEntry(timeSpan, game);
  };

  const toggleViewNote = () => {
    setIsViewNote((prev) => !prev);
  };

  const toggleAddNote = () => {
    console.log('add note: sets isViewNote to TRUE and isEditNote to TRUE');
    // open note editor -> EditNote
    setIsViewNote((prev) => !prev);
    setIsEditNote((prev) => !prev);
  };

  const toggleEditNote = () => {
    // in Note, this sets isEditNote to TRUE
    // in EditNote, this probly sets isEditNote to FALSE
    setIsEditNote((prev) => !prev);
  };

  // Do no display Note
  // ---- if note exists, display View Note
  // ---- ---- if View Note clicked, display Note
  // ---- ---- ---- if Hide Note clicked, hide Note
  // ---- ---- ---- if Edit Note clicked, display EditNote
  // ---- ---- ---- ---- if note added and Save clicked, save note and display updated Note
  // ---- ---- ---- ---- if Cancel clicked, display previous Note
  // ---- if not, display Add Note
  // ---- ---- if Add Note clicked, display Note and display EditNote and hide Add Note
  // ---- ---- ---- if note added and Save clicked, save note and display Note and Hide Note
  // ---- ---- ---- if Cancel clicked, hide Note and hide EditNote and display Add Note

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
          {currentNote ? (
            <ViewNote isViewNote={isViewNote} toggleNote={toggleViewNote} />
          ) : (
            !isViewNote && <AddNoteBtn toggleAddNote={toggleAddNote} />
          )}
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
