import Spinner from '@components/layouts/spinner/Spinner';
import getFirebaseApp from '@libs/firebase';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from '@libs/router/AppRouter';
import '@libs/i18n';
import { Provider } from 'react-redux';
import { store } from './store';
import { worker } from '@libs/mocks';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}
function App() {
  getFirebaseApp();
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Spinner />}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              <RouterProvider router={AppRouter} />
            </ThemeProvider>
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
