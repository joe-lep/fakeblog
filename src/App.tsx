import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routing from './Routing';
import ReduxProvider from './providers/ReduxProvider';
import { DialogManager } from '@joe-lep/react-dialog-manager';

import { defaultTheme } from './themes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <ReduxProvider>
            <DialogManager>
              <Routing />
            </DialogManager>
          </ReduxProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
