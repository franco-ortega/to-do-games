import styles from './EditNote.module.scss';

type Props = {
  isOpen: boolean;
  notes: string;
};

export default function EditNote({ isOpen, notes }: Props) {
  return (
    <dialog className={styles.EditNote} open={isOpen}>
      <textarea>{notes}</textarea>
    </dialog>
  );
}
