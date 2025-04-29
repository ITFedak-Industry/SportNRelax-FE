import { Button, Modal } from '../ui';

type Props = {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
};

function ConfirmModalPresenter(props: Props) {
  const {
    title,
    onConfirm,
    onCancel,
    confirmText = 'Yes',
    cancelText = 'No',
  } = props;

  return (
    <Modal>
      <span className="text_base text_bold">{title}</span>
      <Button onClick={onConfirm}>{confirmText}</Button>
      <Button theme="secondary" onClick={onCancel}>
        {cancelText}
      </Button>
    </Modal>
  );
}

export const ConfirmModal = ConfirmModalPresenter;

export function useConfirmModal() {
  return null;
}
