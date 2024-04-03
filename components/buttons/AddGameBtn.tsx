import Button from './Button';

type Props = {
  handler: () => void;
  disabled: boolean;
};

export default function AddGameBtn({ handler, disabled }: Props) {
  const addGameText = 'Add Game';
  return <Button handler={handler} text={addGameText} disabled={disabled} />;
}
