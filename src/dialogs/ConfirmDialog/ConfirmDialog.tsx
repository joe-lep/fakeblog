import { useDialogControls } from '@joe-lep/react-dialog-manager';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  message: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
}

export const ConfirmDialog : React.FC<Props> = ({ message, confirmLabel = 'OK', cancelLabel = 'Cancel' }) => {
  const { open, dialogClose, dialogSubmit } = useDialogControls();

  return (
    <Dialog open={open} onClose={dialogClose} maxWidth="xs">
      <DialogContent>
        {message}
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogClose}>
          {cancelLabel}
        </Button>
        <Button onClick={dialogSubmit}>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
