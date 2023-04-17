import React, { useCallback, useMemo } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Grid } from '@mui/material';

import { UserPost, UserPostInput } from '../../types/UserPost';
import { ControlledTextField } from '../../components/ControlledFields';

type Props = Omit<JSX.IntrinsicElements['form'], 'onSubmit'> & {
  existingPost?: UserPost;
  onSubmit: (values: UserPostInput) => any;
};

const emptyValues : FieldValues = {
  title: '',
  body: '',
};

export const UserPostForm : React.FC<Props> = ({ existingPost, onSubmit, ...props }) => {
  const isEditMode = Boolean(existingPost);

  const defaultValues : FieldValues = useMemo(() => {
    if (existingPost) {
      return {
        title: existingPost.title,
        body: existingPost.body,
      };
    }

    return emptyValues;
  }, [existingPost]);

  const { control, handleSubmit } = useForm({ defaultValues })

  const parseSubmission = useCallback((values: FieldValues) => {
    const parsedValues : UserPostInput = {
      title: values.title,
      body: values.body,
    };

    onSubmit(parsedValues);
  }, [onSubmit]);

  return (
    <form {...props} onSubmit={handleSubmit(parseSubmission)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ControlledTextField
            name="title"
            control={control}
            rules={{ required: true }}
            label="Title"
            disabled={isEditMode}
          />
        </Grid>
        <Grid item xs={12}>
          <ControlledTextField
            name="body"
            control={control}
            rules={{ required: true }}
            label="Body"
            multiline
            rows={16}
          />
        </Grid>
      </Grid>
    </form>
  );
};
