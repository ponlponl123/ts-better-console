import type { StyleOptions } from "../../types/style.types";

type MenuItemOptions = {
  label: string;
  style?: StyleOptions;
  focusStyle?: StyleOptions;
};

type MenuOptions = {
  selectedIcon?: string;
  unselectedIcon?: string;
  focusStyle?: StyleOptions;
  itemStyle?: StyleOptions;
  defaultIndex?: number;
};

interface MenuEvents {
  select: [label: string, index: number];
  exit: [];
}

export type { MenuItemOptions, MenuOptions, MenuEvents };
