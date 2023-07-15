import React from "react"
import { Box, Flex, Input, Button } from "@chakra-ui/react"
import { BsFillPenFill, BsSearch } from "react-icons/bs"
import { styled } from "styled-components"
import { useState } from "react"

const Navbar = () => {
   const [isActive, setIsActive] = useState(true)
   const handleSetActive = () => {
      setIsActive(true)
   }

   const handleSetInactive = () => {
      setIsActive(false)
   }

   const BtnStyle = styled.button`
      color: ${(props) => (props.isActive ? "white" : "#3333")};
      background-color: ${(props) => (props.isActive ? "#9f7aea" : "#eeee")};
      width: 120px;
      margin-right: 10px;
      padding: 5px 0;
      border-radius: 50px;
      transition: all 300ms ease-in;

      &:hover {
         opacity: 0.7;
      }
   `

   const AddIconStyle = styled.p`
      color: white;
      background: #9f7aea;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
   `

   return (
      <Flex as="nav" h={73} alignItems={"center"} justify={"space-between"} px={5}>
         <Flex alignItems={"center"} gap={2}>
            <BsSearch />
            <Input type="search" w={250} placeholder="Search..." variant="unstyled" />
         </Flex>

         <Box>
            <BtnStyle isActive={isActive} onClick={handleSetActive}>
               Task
            </BtnStyle>
            <BtnStyle isActive={!isActive} onClick={handleSetInactive}>
               Calendar
            </BtnStyle>
         </Box>

         <AddIconStyle>
            <BsFillPenFill />
         </AddIconStyle>
      </Flex>
   )
}

export default Navbar
