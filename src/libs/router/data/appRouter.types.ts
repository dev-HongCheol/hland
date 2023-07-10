export type RouteItem = {
  [key: string]: string | RouteItem;
  path: string;
  description: string;
};

export type Routes = {
  [key: string]: RouteItem | string;
};
