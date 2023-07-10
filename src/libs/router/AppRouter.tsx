import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./data";
import AuthProvider from "@libs/hocs/auth/AuthProvider";

const DefaultLayout = lazy(
  () => import("@components/layouts/default-layout/DefaultLayout")
);

const MainPage = lazy(() => import("@pages/main/MainPage"));
const LoginPage = lazy(() => import("@pages/login/LoginPage"));

const AppRouter = createBrowserRouter([
  {
    path: ROUTES.INDEX.path,
    element: (
      <AuthProvider>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN.path,
    element: <LoginPage />,
  },
]);

export default AppRouter;
