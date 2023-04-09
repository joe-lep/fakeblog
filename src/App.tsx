import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routing from './Routing';
import ReduxProvider from './providers/ReduxProvider';

import { defaultTheme } from './themes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <ReduxProvider>
            <Routing />
          </ReduxProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
