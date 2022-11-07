import React from 'react';
import { MantineProvider } from '@mantine/core';
import AppRouter from './AppRouter';

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <AppRouter />
  </MantineProvider>
);

export default App;
