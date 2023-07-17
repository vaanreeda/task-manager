import React, { useEffect, useState } from "react"
import { Box, Flex, Button, Heading, Text, Input } from "@chakra-ui/react"
import { FiTrash2 } from "react-icons/fi"
import { RiCloseFill } from "react-icons/ri"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsCheck, BsSend } from "react-icons/bs"

const Task = ({ list, inSelected }) => {
   const [opacity, setOpacity] = useState(1)
   const [taskSelected, setTaskSelected] = useState(null)

   useEffect(() => {
      setOpacity(0)
      const timeout = setTimeout(() => {
         setTaskSelected(list[inSelected])
         setOpacity(1)
      }, 300)
      return () => clearTimeout(timeout)
   }, [inSelected, list])

   return (
      <Box as="section" w={"full"} h={"full"} position={"relative"}>
         <Flex w={"full"} h={20} borderBottom={"1px solid"} borderColor={"gray.300"}>
            <Flex
               w={"full"}
               h={"full"}
               align={"center"}
               justify={"end"}
               pr={10}
               fontWeight={600}
               fontSize={20}
               textTransform={"uppercase"}>
               <Button
                  borderRadius={"50%"}
                  w={"50px"}
                  h={"50px"}
                  bg={"purple.100"}
                  color={"purple.500"}
                  fontSize={"20px"}>
                  <FiTrash2 />
               </Button>
            </Flex>
         </Flex>

         <Flex gap={5} p={5} style={{ opacity: opacity, transition: "opacity 0.3s ease" }}>
            <Flex
               align={"center"}
               justify={"center"}
               h={"50px"}
               w={"50px"}
               bg={!!taskSelected && taskSelected.checked ? "green.100" : "purple.400"}
               border={"2px solid"}
               borderColor={!!taskSelected && taskSelected.checked ? "green.400" : "purple.400"}
               borderRadius={"50%"}
               fontSize={32}
               color={!!taskSelected && taskSelected.checked ? "green.400" : "white"}
               cursor={"pointer"}
               style={{ transition: "opacity 0.3s ease" }}>
               {!!taskSelected && taskSelected.checked ? <BsCheck /> : <RiCloseFill />}
            </Flex>

            <Flex flex={1} pt={3} pr={5} flexDirection={"column"} gap={4}>
               <Heading as={"h3"} fontSize={22}>
                  {!!taskSelected && taskSelected.title}
               </Heading>
               <Text display={"flex"} alignItems={"center"} gap={2} color={"gray.400"} fontSize={14} fontWeight={600}>
                  <AiOutlineClockCircle />
                  {!!taskSelected && taskSelected.addAt}
               </Text>

               <Text mt={4} color={"gray.500"} borderBottom={"1px solid"} borderColor={"gray.300"} pb={9}>
                  {!!taskSelected && taskSelected.desc}
               </Text>
            </Flex>
         </Flex>

         <Flex bg={"gray.100"} h={90} position={"absolute"} bottom={0} left={0} right={0} align={"center"}>
            <Input variant={"unstyled"} type="text" placeholder="Write a comment..." pl={8} />
            <Button colorScheme={"purple"} h={"full"} borderRadius={0} fontSize={30} px={8}>
               <BsSend />
            </Button>
         </Flex>
      </Box>
   )
}

export default Task
