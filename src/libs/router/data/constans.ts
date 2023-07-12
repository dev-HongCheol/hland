import { RouteItem } from './appRouter.types';

const routers = {
  INDEX: {
    path: '/',
    description: 'Main Page',
  },
  LOGIN: {
    path: '/login',
    description: 'Login Page',

    FIND_PWD: {
      path: '/find-pw',
      description: 'find password',

      FIND_PWD11: {
        path: '/find-pw11',
        description: 'find password',
      },
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
    return `${import.meta.env.VITE_SERVER_DOMAIN}${value}`;
  },
};
// FIXME:
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ROUTES = new Proxy(routers, setNestedPathProxy);
export default ROUTES;
