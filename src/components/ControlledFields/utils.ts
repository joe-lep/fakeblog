import { FieldError } from 'react-hook-form';

export const parseErrorMessage = (error : FieldError | undefined) => {
  if (!error) {
    return undefined;
  }

  switch (error.type) {
    case 'required':
      return 'Required';
    default:
      return error.message;
  }
};
