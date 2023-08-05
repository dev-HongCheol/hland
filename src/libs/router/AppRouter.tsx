import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';
import AuthProvider from '@libs/hocs/auth/AuthProvider';

const DefaultLayout = lazy(() => import('@components/layouts/default-layout/DefaultLayout'));
const MemberLayout = lazy(() => import('@components/layouts/member-layout/MemberLayout'));

const MainPage = lazy(() => import('@pages/main/MainPage'));
const MemberJoin = lazy(() => import('@pages/member/join/MemberJoinPage'));

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
    path: ROUTES.MEMBER.JOIN.path,
    element: (
      <MemberLayout>
        <Outlet />
      </MemberLayout>
    ),
    children: [
      {
        path: ROUTES.MEMBER.JOIN.path,
        element: <MemberJoin />,
      },
    ],
  },
]);

export default AppRouter;
