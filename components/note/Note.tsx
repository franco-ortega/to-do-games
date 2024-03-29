import EditNoteBtn from '../buttons/EditNoteBtn';
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
        <EditNoteBtn toggle={toggleEditNote} />
      </div>
      <p>{note}</p>
    </div>
  );
}
