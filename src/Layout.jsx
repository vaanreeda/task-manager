import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import { Flex } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

const Layout = () => {
   return (
      <Flex>
         <Profile />
         <Flex flexDirection={"column"} flexGrow={1}>
            <Navbar />
            <Outlet />
         </Flex>
      </Flex>
   )
}

export default Layout
