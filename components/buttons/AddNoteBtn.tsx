import Button from './Button';

type Props = {
  toggle: () => void;
};

export default function AddNoteBtn({ toggle }: Props) {
  const addNoteText = 'Add Note';
  return <Button handler={toggle} text={addNoteText} />;
}
