'use client';

import { useState } from 'react';
import { Game, TimeSpanPaths } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';
import getGameProps from '@/utils/getGameProps';
import ViewNote from '../buttons/ViewNote';
import Note from '../note/Note';
import styles from './GameEntry.module.scss';
import AddNoteBtn from '../buttons/AddNoteBtn';
import EditNote from '../editNote/EditNote';

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

  const toggleNote = () => {
    setIsViewNote((prev) => !prev);
  };

  const toggleAddNote = () => {
    console.log('add note');
    // open note editor -> EditNote
  };

  const toggleEditNote = () => {
    setIsEditNote((prev) => !prev);
  };

  // Do no display Note
  // ---- if note exists, display View Note
  // ---- ---- if View Note clicked, display Hide Note, Note and Edit Note button
  // ---- ---- ---- if Hide Note clicked, hide Note and display View Note
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
            <ViewNote isViewNote={isViewNote} toggleNote={toggleNote} />
          ) : (
            !isViewNote && <AddNoteBtn toggleAddNote={toggleNote} />
          )}
        </div>
        {isViewNote &&
          (!isEditNote ? (
            <Note
              currentNote={currentNote}
              setCurrentNote={setCurrentNote}
              title={title}
              timeSpan={timeSpan}
              toggleNote={toggleNote}
              toggleEditNote={toggleEditNote}
            />
          ) : (
            <EditNote
              toggleEditNote={toggleEditNote}
              toggleNote={toggleNote}
              titleToEdit={title}
              note={currentNote}
              timeSpanOption={timeSpan}
              setCurrentNote={setCurrentNote}
            />
          ))}
      </div>
    </li>
  );
}
