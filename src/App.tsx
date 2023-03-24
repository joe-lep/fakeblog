import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routing from './Routing';

const queryClient = new QueryClient();

const theme = createTheme();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
