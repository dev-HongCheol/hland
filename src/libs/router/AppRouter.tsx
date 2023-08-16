import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';
import AuthProvider from '@libs/hocs/auth/AuthProvider';

const DefaultLayout = lazy(() => import('@components/layouts/default-layout/DefaultLayout'));
const MemberLayout = lazy(() => import('@components/layouts/member-layout/MemberLayout'));

const MainPage = lazy(() => import('@pages/main/MainPage'));
const AccountSignUpPage = lazy(() => import('@pages/account/sign-up/AccountSignUpPage'));
const AccountLoginPage = lazy(() => import('@pages/account/log-in/AccountLoginPage'));

const AppRouter = createBrowserRouter(
  [
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
      path: ROUTES.ACCOUNT.path,
      element: (
        <MemberLayout>
          <Outlet />
        </MemberLayout>
      ),
      children: [
        {
          path: ROUTES.ACCOUNT.SIGN_UP.path,
          element: <AccountSignUpPage />,
        },
        {
          path: ROUTES.ACCOUNT.LOG_IN.path,
          element: <AccountLoginPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_SERVER_DOMAIN,
  },
);

export default AppRouter;
