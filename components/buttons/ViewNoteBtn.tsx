import styles from './ViewNoteBtn.module.scss';

type Props = {
  isViewNote: boolean;
  toggleNote: () => void;
};

export default function ViewNoteBtn({ isViewNote, toggleNote }: Props) {
  return (
    <button className={styles.ViewNoteBtn} onClick={toggleNote}>{`${
      isViewNote ? 'Hide' : 'View'
    } Note`}</button>
  );
}
