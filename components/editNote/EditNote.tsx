import { Dispatch, SetStateAction, useState } from 'react';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPaths } from '@/utils/types';
import getGameProps from '@/utils/getGameProps';
import styles from './EditNote.module.scss';

type Props = {
  toggleEditNote: () => void;
  titleToEdit: string;
  note: string;
  timeSpanOption: TimeSpanPaths;
  setCurrentNote: Dispatch<SetStateAction<string>>;
  toggleNote: () => void;
};

export default function EditNote({
  toggleEditNote,
  titleToEdit,
  note,
  timeSpanOption,
  setCurrentNote,
  toggleNote,
}: Props) {
  const [newNote, setNewNote] = useState(note);

  const onHandleCancel = () => {
    toggleEditNote();
    toggleNote();
  };

  const onHandleSave = () => {
    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: savedGames[timeSpanOption].map((game) => {
        const { title, isPlayed, note } = getGameProps(game);

        if (title === titleToEdit) {
          return {
            title,
            isPlayed,
            note: newNote,
          };
        }
        return {
          title,
          isPlayed,
          note,
        };
      }),
    };

    setCurrentNote(newNote);
    setGames('GAMES_TO_PLAY', updatedGames);
    toggleEditNote();
    toggleNote();
  };

  return (
    <div className={styles.EditNote}>
      <label htmlFor='edit-note'>
        <p>Note:</p>
        <textarea
          rows={4}
          id='edit-note'
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={onHandleSave}>Save</button>
        <button onClick={onHandleCancel}>Cancel</button>
      </label>
    </div>
  );
}
