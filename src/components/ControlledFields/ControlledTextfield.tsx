import React, { useCallback } from 'react';
import { Controller, ControllerProps, ControllerRenderProps, FieldValues, ControllerFieldState } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

import { parseErrorMessage } from './utils';

type Props = TextFieldProps & Omit<ControllerProps, 'render'>;

export const ControlledTextField : React.FC<Props> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}) => {
  const render = useCallback(({ field, fieldState } : { field : ControllerRenderProps<FieldValues, string>, fieldState : ControllerFieldState }) => {
    return (
      <TextField
        {...field}
        {...props}
        error={Boolean(fieldState.error)}
        helperText={parseErrorMessage(fieldState.error)}
        fullWidth
      />
    );
  }, [props]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={render}
    />
  );
};
