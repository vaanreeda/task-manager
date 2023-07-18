import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import { Flex } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

const Layout = () => {
   return (
      <Flex maxW={"1800px"} h={"100vh"} mx={"auto"} border={"1px solid"} borderColor={"gray.300"}>
         <Profile />
         <Flex h={"full"} flexDirection={"column"} flex={1}>
            <Navbar />
            <Outlet />
         </Flex>
      </Flex>
   )
}

export default Layout
