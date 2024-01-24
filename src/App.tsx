import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import { Dark, Light } from "./infrastructure/themes"
import { CssBaseline } from "@mui/material"
import { Suspense, useMemo } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import useTheme from "./store/useTheme"
import { privateRoutes, publicRoutes } from "./infrastructure/routes"
import useAuth from "./store/useAuth"
import { useQueryClient } from "@tanstack/react-query"
import Modal from "./pages/global/Modal"
import SnackbarComponent from "./pages/global/SnackbarComponent"

const App = () => {
  const theme = useTheme().theme
  const role = useAuth().role
  const queryClient = useQueryClient()

  const routes = useMemo(() => {
    if (role === "admin" || role === "user") {
      return [...publicRoutes, ...privateRoutes(queryClient)]
    }
    return publicRoutes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <ThemeProvider theme={responsiveFontSizes(theme === "light" ? Light : Dark)}>
      <CssBaseline />
      <main id="main" >
        <Suspense fallback={<div>Global Loading...</div>}>
          <Modal />
          <SnackbarComponent />
          <RouterProvider router={createBrowserRouter(routes)} />
        </Suspense>
      </main>
    </ThemeProvider>
  )
}

export default App