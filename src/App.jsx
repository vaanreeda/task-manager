import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Calendar from "./pages/Calendar"

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/calendar",
            element: <Calendar />,
         },
      ],
   },
])

const App = () => {
   return <RouterProvider router={router} />
}

export default App
