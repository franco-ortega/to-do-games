import Button from './Button';

type Props = {
  toggle: () => void;
  disabled: boolean;
};

export default function EditNoteBtn({ toggle, disabled }: Props) {
  const editNoteText = 'Edit Note';
  return <Button handler={toggle} text={editNoteText} disabled={disabled} />;
}
