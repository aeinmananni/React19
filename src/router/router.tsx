"use client";
import { RouteObject, createBrowserRouter } from "react-router";
import Home from "../home";
import {
  Pages,
  FormActionState,
  UseActionState,
  UseOptimistic,
  Refs,
  UseApi,
  BlogPost,
} from "../containers";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "useTransition",
        element: <Pages />,
      },
      {
        path: "formActionState",
        element: <FormActionState />,
      },
      {
        path: "useActionState",
        element: <UseActionState />,
      },
      {
        path: "useOptimistic",
        element: <UseOptimistic />,
      },
      {
        path: "Refs",
        element: <Refs />,
      },
      {
        path: "useApi",
        element: <UseApi />,
      },
      {
        path: "blog-post",
        element: <BlogPost />,
      },
    ],
  },
];

const router = createBrowserRouter(routes)

export default router;
