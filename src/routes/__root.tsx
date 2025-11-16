import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/hooks/useTheme'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  ),
})
