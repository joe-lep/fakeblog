import React, { useCallback, useMemo } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { Profile, ProfilePayload } from '../../types';
import { ControlledTextField } from '../../components/ControlledFields';

type Props = Omit<JSX.IntrinsicElements['form'], 'onSubmit'> & {
  existingProfile?: Profile;
  onSubmit: (values: ProfilePayload) => any;
};

const emptyValues : FieldValues = {
  name: '',
  bio: '',
};

export const ProfileForm : React.FC<Props> = ({ existingProfile, onSubmit, ...props }) => {
  const defaultValues : FieldValues = useMemo(() => {
    if (existingProfile) {
      return {
        title: existingProfile.name,
        bio: existingProfile.bio,
      };
    }

    return emptyValues;
  }, [existingProfile]);

  const { control, handleSubmit } = useForm({ defaultValues })

  const parseSubmission = useCallback((values: FieldValues) => {
    const parsedValues : ProfilePayload = {
      name: values.name,
      bio: values.bio,
    };

    onSubmit(parsedValues);
  }, [onSubmit]);

  return (
    <form {...props} onSubmit={handleSubmit(parseSubmission)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ControlledTextField
            name="name"
            control={control}
            rules={{ required: true }}
            label="User Name"
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="bio"
            control={control}
            label="Bio"
            multiline
            rows={6}
          />
        </Grid>
      </Grid>
    </form>
  );
};
