type Props = {
  handler: () => {};
  text: string;
};

export default function Button({ handler, text }: Props) {
  return <button onClick={handler}>{text}</button>;
}
