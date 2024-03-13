import { Dispatch, SetStateAction } from 'react';
import styles from './EditNote.module.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  notes: string;
};

export default function EditNote({ isOpen, notes, setIsOpen }: Props) {
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <dialog className={styles.EditNote} open={isOpen}>
      <label htmlFor='edit-note'>
        <p>Note:</p>
        <textarea
          rows={4}
          id='edit-note'
          value={notes}
          onChange={(e) => e.target.value}
        />
        <button onClick={handleCancel}>Cancel</button>
      </label>
    </dialog>
  );
}
