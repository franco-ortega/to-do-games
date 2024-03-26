import styles from './ViewNote.module.scss';

type Props = {
  isViewNote: boolean;
  toggleNote: () => void;
};

export default function ViewNote({ isViewNote, toggleNote }: Props) {
  return (
    <button className={styles.ViewNote} onClick={toggleNote}>{`${
      isViewNote ? 'Hide' : 'View'
    } Note`}</button>
  );
}
