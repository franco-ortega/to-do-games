import styles from './Note.module.scss';

type Props = {
  note: string;
};

export default function Note({ note }: Props) {
  return (
    <div className={styles.Note}>
      <p>{note}</p>
    </div>
  );
}
