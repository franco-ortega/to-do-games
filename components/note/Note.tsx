import EditNoteBtn from '../buttons/EditNoteBtn';
import styles from './Note.module.scss';

type Props = {
  note: string;
  toggleEditNote: () => void;
};

export default function Note({ note, toggleEditNote }: Props) {
  return (
    <div className={styles.Note}>
      <p>{note}</p>
    </div>
  );
}
