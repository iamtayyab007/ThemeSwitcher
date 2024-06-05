import React from "react";
import { createContext, useContext } from "react";

const ThemeSwitcher = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeToggler = ThemeSwitcher.Provider;

export default function useTheme() {
  return useContext(ThemeSwitcher);
}
