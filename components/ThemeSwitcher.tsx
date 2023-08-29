import { useTheme } from "next-themes";
import { Button } from '@nextui-org/react'

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme()

  return (
    <div>
      <Button variant="ghost" onClick={() => setTheme('light')}>Light Mode</Button>
      <Button variant="ghost" onClick={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  )
};