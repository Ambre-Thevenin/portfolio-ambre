import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Root } from './routes/Root';

import { theme } from './theme/theme';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
