import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import { Dark, Light } from "./infrastructure/themes"
import { CssBaseline } from "@mui/material"
import { Suspense, useMemo } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import useTheme from "./store/useTheme"
import { privateRoutes, publicRoutes } from "./infrastructure/routes"
import useAuth from "./store/useAuth"
import { useQueryClient } from "@tanstack/react-query"


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
      <Suspense fallback={<div>Global Loading...</div>}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App