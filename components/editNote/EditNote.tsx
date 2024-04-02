import { useState } from 'react';
import { TimeSpanPaths } from '@/utils/types';
import saveNote from '@/utils/saveNote';
import Button from '../buttons/Button';
import styles from './EditNote.module.scss';

type Props = {
  timeSpan: TimeSpanPaths;
  titleToEdit: string;
  currentNote: string;
  onEditNote: (noteToEdit: string) => void;
};

export default function EditNote({ currentNote, onEditNote }: Props) {
  return (
    <div className={styles.EditNote}>
      <label htmlFor='edit-note'>
        <textarea
          rows={4}
          id='edit-note'
          defaultValue={currentNote}
          onChange={(e) => onEditNote(e.target.value)}
        />
      </label>
    </div>
  );
}
