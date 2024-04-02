import styles from './Button.module.scss';

type Props = {
  text: string;
  handler: () => void;
  disabled?: boolean;
};

export default function Button({ text, handler, disabled }: Props) {
  return (
    <button className={styles.Button} onClick={handler} disabled={disabled}>
      {text}
    </button>
  );
}
