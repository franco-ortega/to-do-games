import styles from './EditNote.module.scss';

type Props = {
  isOpen: boolean;
};

export default function EditNote({ isOpen }: Props) {
  return (
    <dialog className={styles.EditNote} open={isOpen}>
      Edit your note
    </dialog>
  );
}
