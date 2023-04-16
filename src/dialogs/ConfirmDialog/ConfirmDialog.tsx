import { useDialogControls } from '@joe-lep/react-dialog-manager';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  message: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
}

export const ConfirmDialog : React.FC<Props> = ({ message, confirmLabel = 'OK', cancelLabel = 'Cancel' }) => {
  const { open, closeDialog, submitDialog } = useDialogControls();

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="xs">
      <DialogContent>
        {message}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>
          {cancelLabel}
        </Button>
        <Button onClick={submitDialog}>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
