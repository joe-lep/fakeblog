import { Paper, styled } from '@mui/material';

export const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1, 0),
}));
