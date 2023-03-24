import React, { useCallback } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from '@mui/material';

import { ControlledTextField } from '../../components/ControlledFields';
import { createNewProfile } from '../../api/createNewProfile';

const defaultValues : FieldValues = {
  name: '',
};

export const NewProfile : React.FC = () => {

  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = useCallback((values : FieldValues) => {
    const name : string = values.name;

    return createNewProfile({ name }).then(profile => {
      console.log('Created profile', profile);
    })
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        name="name"
        control={control}
        rules={{ required: true }}
        label="Profile Name"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
