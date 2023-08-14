import { RouteItem } from './appRouter.types';

const routers = {
  INDEX: {
    path: '/',
    description: 'Main Page',
  },
  ACCOUNT: {
    path: '/account',
    description: 'account',

    SIGN_UP: {
      path: '/sign-up',
      description: 'account join',
    },
    LOG_IN: {
      path: '/log-in',
      description: 'login',
    },
  },
};

const setNestedPathProxy: ProxyHandler<RouteItem> = {
  get(target: RouteItem, p: keyof typeof routers): RouteItem | string {
    const value = target[p];
    if (typeof value === 'object' && value !== null) {
      const parentPath = target.path ? target?.path : '';
      return new Proxy({ ...value, path: `${parentPath}${value.path}` }, setNestedPathProxy);
    }
    // return `${import.meta.env.VITE_SERVER_DOMAIN}${value}`;
    return value;
  },
};
// FIXME: 타입 수정 필요.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ROUTES = new Proxy(routers, setNestedPathProxy);
export default ROUTES;
