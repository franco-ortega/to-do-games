import styles from './Button.module.scss';

type Props = {
  text: string;
  handler: () => {};
};

export default function Button({ text, handler }: Props) {
  return (
    <button className={styles.Button} onClick={handler}>
      {text}
    </button>
  );
}
