import { RouteItem } from "./appRouter.types";

const routers = {
  INDEX: {
    path: "/",
    description: "Main Page",
  },
  LOGIN: {
    path: "/login",
    description: "Login Page",
  },
};

// FIXME: any type change
const setNestedPathProxy: ProxyHandler<any> = {
  get(target: RouteItem, key: keyof typeof routers): RouteItem | string {
    const value = target[key];
    if (typeof value === "object" && value !== null) {
      const parentPath = target.path ? target?.path : "";
      return new Proxy(
        { ...value, path: `${parentPath}${value.path}` },
        setNestedPathProxy
      );
    }
    return target[key];
  },
};

const ROUTES = new Proxy(routers, setNestedPathProxy);

export default ROUTES;
