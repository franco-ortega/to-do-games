import styles from './Button.module.scss';

type Props = {
  text: string;
  handler: () => void;
};

export default function Button({ text, handler }: Props) {
  return (
    <button className={styles.Button} onClick={handler}>
      {text}
    </button>
  );
}
