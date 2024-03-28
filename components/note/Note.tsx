import styles from './Note.module.scss';

type Props = {
  currentNote: string;
  toggleEditNote: () => void;
};

export default function Note({ currentNote, toggleEditNote }: Props) {
  return (
    <div className={styles.Note}>
      <div>
        <h4>Note</h4>
        <button onClick={toggleEditNote}>Edit Note</button>
      </div>
      <p>{currentNote}</p>
    </div>
  );
}
