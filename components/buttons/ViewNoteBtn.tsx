import Button from './Button';

type Props = {
  isViewNote: boolean;
  toggle: () => void;
};

export default function ViewNoteBtn({ isViewNote, toggle }: Props) {
  const viewNoteText = `${isViewNote ? 'Hide' : 'View'} Note`;

  return <Button handler={toggle} text={viewNoteText} />;
}
