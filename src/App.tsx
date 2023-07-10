import Spinner from "@components/layouts/spinner/Spinner";
import getFirebaseApp from "@libs/firebase";
import muiTheme from "@libs/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "@libs/router/AppRouter";
import "@libs/i18n";

function App() {
  getFirebaseApp();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <RouterProvider router={AppRouter} />
          </ThemeProvider>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
