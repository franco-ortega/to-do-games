import Button from './Button';

type Props = {
  toggle: () => void;
};

export default function EditNoteBtn({ toggle }: Props) {
  const editNoteText = 'Edit Note';
  return <Button handler={toggle} text={editNoteText} />;
}
