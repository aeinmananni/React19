"use client";
import { RouteObject, createBrowserRouter } from "react-router";
import Home from "../home";
import PersonForm from "../containers/person-form";
import UseOptimistic from "../containers/useOptimistic/index.tsx";
import {Pages} from "../containers"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "useTransition",
        element: <Pages />,
      },
      // {
      //   path: "useActionState",
      //   element: <PersonForm />,
      // },
      // {
      //   path: "useOptimistic",
      //   element: <UseOptimistic />,
      // },
    ],
  },
];

const router = createBrowserRouter(routes)

export default router;
