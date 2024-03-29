import styles from './AddNoteBtn.module.scss';

type Props = {
  toggle: () => void;
};

export default function AddNoteBtn({ toggle }: Props) {
  return (
    <button className={styles.AddNoteBtn} onClick={toggle}>
      Add Note
    </button>
  );
}
