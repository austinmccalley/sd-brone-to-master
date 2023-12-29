import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  )
}