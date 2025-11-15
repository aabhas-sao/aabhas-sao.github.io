import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Home />
      <Outlet />
    </>
  ),
})
