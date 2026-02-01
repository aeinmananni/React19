"use client";
import { RouteObject, createBrowserRouter } from "react-router";
import Home from "../home";
import {Pages,ActionState} from "../containers"

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
        path: "useActionState",
        element: <ActionState />,
      },
      // {
      //   path: "useOptimistic",
      //   element: <UseOptimistic />,
      // },
    ],
  },
];

const router = createBrowserRouter(routes)

export default router;
