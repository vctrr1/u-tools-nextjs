"use client"

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme()

    const handleThemeChange = (checked: boolean) => {
        setTheme(checked ? "dark" : "light")
    }

    return (
        <div className="flex items-center space-x-2">
            <Switch
                checked={theme === "dark"}
                onCheckedChange={handleThemeChange}

            />
        </div>
    );
}
 
export default ThemeSwitch;