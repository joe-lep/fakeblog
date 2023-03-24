import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routing from './Routing';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </div>
  );
};

export default App;
