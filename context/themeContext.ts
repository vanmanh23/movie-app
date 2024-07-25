import { createContext } from "react";

type stypeContext = {
    isDark: boolean;
    handleSwitch: (isDark: boolean) => void;
}
export const ThemeContext = createContext({} as stypeContext)