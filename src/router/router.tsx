"use client";
import { RouteObject, createBrowserRouter } from "react-router";
import Home from "../home";
import {Pages,FormActionState,UseActionState ,UseOptimistic} from "../containers"

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
    ],
  },
];

const router = createBrowserRouter(routes)

export default router;
