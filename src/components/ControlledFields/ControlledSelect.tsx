import React, { ReactNode, useCallback, useId, useMemo } from 'react';
import { Controller, ControllerProps, ControllerRenderProps, FieldValues, ControllerFieldState } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, FormControlProps, FormHelperText } from '@mui/material';

import { parseErrorMessage } from './utils';

type Option = {
  value: number | string;
  label: ReactNode;
};

type Props = FormControlProps & Omit<ControllerProps, 'render'> & {
  label: ReactNode;
  options?: Array<Option>;
};

export const ControlledSelect : React.FC<Props> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  label,
  options,
  ...props
}) => {
  const rootId = useId();
  const labelId = `${rootId}--label`;
  const selectId = `${rootId}--select`;
  const helperTextId = `${rootId}--helper-text';`

  const renderedOptions = useMemo(() => {
    if (!options) {
      return null;
    }
  
    return options.map(item => (
      <MenuItem key={item.value} value={item.value}>
        {item.label}
      </MenuItem>
    ))
  }, [options]);

  const render = useCallback(({ field, fieldState } : { field : ControllerRenderProps<FieldValues, string>, fieldState : ControllerFieldState }) => {
    const errorMessage = parseErrorMessage(fieldState.error);
    
    return (
      <FormControl error={Boolean(fieldState.error)} fullWidth {...props}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          id={selectId}
          labelId={labelId}
          label={label}
          aria-describedby={errorMessage ? helperTextId : undefined}
          {...field}
        >
          {renderedOptions}
        </Select>
        {errorMessage && (
          <FormHelperText id={helperTextId}>
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    );
  }, [props, label, renderedOptions, labelId, selectId, helperTextId]);

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
