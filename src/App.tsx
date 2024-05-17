import { ThemeProvider } from "./shared/ui/theme-provider";
import Office from "./widgets/Office";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Office />
    </ThemeProvider>
  )
}

export default App