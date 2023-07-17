import React from "react"
import { Box, Flex, Input, Button } from "@chakra-ui/react"
import { BsFillPenFill, BsSearch } from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
   const [isActive, setIsActive] = useState(true)
   const handleSetActive = () => {
      setIsActive(true)
   }

   const handleSetInactive = () => {
      setIsActive(false)
   }

   return (
      <Flex
         as="nav"
         minH={"73px"}
         alignItems={"center"}
         justify={"space-between"}
         px={5}
         borderBottom={"1px solid"}
         borderColor={"gray.300"}>
         <Flex alignItems={"center"} gap={2}>
            <BsSearch />
            <Input type="search" w={250} placeholder="Search..." variant="unstyled" />
         </Flex>

         <Flex alignItems={"center"} justify={"center"} pr={"15rem"} gap={2}>
            <Link to={"/"}>
               <Button
                  colorScheme={isActive ? "purple" : "gray"}
                  color={isActive ? "white" : "gray.500"}
                  w={32}
                  h={9}
                  variant="solid"
                  onClick={handleSetActive}>
                  Task
               </Button>
            </Link>

            {/* <Link to={"/calendar"}>
               <Button
                  colorScheme={!isActive ? "purple" : "gray"}
                  color={!isActive ? "white" : "gray.500"}
                  w={32}
                  h={9}
                  variant="solid"
                  onClick={handleSetInactive}>
                  Calendar
               </Button>
            </Link> */}
         </Flex>

         <Flex
            as="button"
            align={"center"}
            justify={"center"}
            color="white"
            bg="#9f7aea"
            w={"40px"}
            h={"40px"}
            borderRadius="50%">
            <BsFillPenFill />
         </Flex>
      </Flex>
   )
}

export default Navbar
