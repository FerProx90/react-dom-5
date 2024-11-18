import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  name: string;
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  children?: Route[];
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    name: "lazy nested",
    path: "/lazy-nested",
    to: "/lazy-nested",
    Component: LazyLayout,
  },
  {
    name: "no lazy",
    path: "/no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
  },
];
