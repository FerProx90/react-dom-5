import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  name: string;
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  children?: Route[];
}

const LazyPage1 = lazy(
  () => import(/* webpackChunkName: "lazy1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () => import(/* webpackChunkName: "lazy2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () => import(/* webpackChunkName: "lazy3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
  {
    name: "lazy 1",
    path: "/lazy1",
    to: "/lazy1",
    Component: LazyPage1,
  },
  {
    name: "lazy 2",
    path: "/lazy2",
    to: "/lazy2",
    Component: LazyPage2,
  },
  {
    name: "lazy 3",
    path: "/lazy3",
    to: "/lazy3",
    Component: LazyPage3,
  },
];
