import styles from './AddNoteBtn.module.scss';

type Props = {
  toggleAddNote: () => void;
};

export default function AddNoteBtn({ toggleAddNote }: Props) {
  return (
    <button className={styles.AddNoteBtn} onClick={toggleAddNote}>
      Add Note
    </button>
  );
}
