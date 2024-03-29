import styles from './ViewNoteBtn.module.scss';

type Props = {
  isViewNote: boolean;
  toggle: () => void;
};

export default function ViewNoteBtn({ isViewNote, toggle }: Props) {
  return (
    <button className={styles.ViewNoteBtn} onClick={toggle}>{`${
      isViewNote ? 'Hide' : 'View'
    } Note`}</button>
  );
}
