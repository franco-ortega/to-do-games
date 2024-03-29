import styles from './Note.module.scss';

type Props = {
  note: string;
  toggleEditNote: () => void;
};

export default function Note({ note, toggleEditNote }: Props) {
  return (
    <div className={styles.Note}>
      <div>
        <h4>Note</h4>
        <button onClick={toggleEditNote}>Edit Note</button>
      </div>
      <p>{note}</p>
    </div>
  );
}
