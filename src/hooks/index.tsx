/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useTransition } from "react";

type PageType = "Home" | "Products" | "About";
export const useTabSwitch = () => {
  const [tab, setTab] = useState<PageType>("Home");
  const [isPendding, startTransition] = useTransition();
  const switchTab = (tab: PageType) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  const setStyleHandler = (thisTab: PageType) => {
    return `${
      tab === thisTab
        ? "bg-orange-500 text-white"
        : "bg-transparent text-orange-500 "
    } w-max h-max p-1 border border-orange-500 rounded-md`;
  };

  return { tab, setStyleHandler, switchTab, isPendding };
};
