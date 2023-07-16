import React from "react"
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"

const List = () => {
   return (
      <Box w={"25rem"} h={"100vh"} borderRight={"1px solid"} borderColor={"gray.300"}>
         <Flex w={"full"} h={24} borderBottom={"1px solid"} borderColor={"gray.300"}>
            <Flex
               w={"full"}
               h={"full"}
               align={"center"}
               justify={"center"}
               fontWeight={600}
               fontSize={20}
               textTransform={"uppercase"}
               color={"purple.400"}
               borderLeft={"6px solid"}>
               Tasks
            </Flex>
         </Flex>

         {/* Task 1 */}
         <Flex
            h={24}
            align={"center"}
            justify={"space-between"}
            borderBottom={"1px solid"}
            borderColor={"gray.300"}
            px={8}
            gap={5}
            bg={"gray.100"}
            cursor={"pointer"}>
            <Flex
               align={"center"}
               justify={"center"}
               h={"50px"}
               w={"50px"}
               bg={"gray.100"}
               border={"2px solid"}
               borderColor={"gray.400"}
               borderRadius={"50%"}
               fontSize={32}
               color={"gray.400"}
               cursor={"pointer"}>
               <BsCheck />
            </Flex>

            <Flex flexDirection={"column"} flexGrow={1} gap={1}>
               <Heading as={"h5"} fontSize={15} textDecor={"line-through"} color={"gray.500"}>
                  Coding 2 hr.
               </Heading>
               <Text color={"gray.500"} fontSize={11}>
                  22 Feb, 2023
               </Text>
            </Flex>
         </Flex>

         {/* Task 2 */}
         <Flex
            h={24}
            align={"center"}
            justify={"space-between"}
            borderBottom={"1px solid"}
            borderColor={"gray.300"}
            px={8}
            gap={5}
            bg={"white"}
            cursor={"pointer"}>
            <Flex
               align={"center"}
               justify={"center"}
               h={"50px"}
               w={"50px"}
               bg={"purple.400"}
               border={"2px solid"}
               borderColor={"purple.400"}
               borderRadius={"50%"}
               fontSize={32}
               color={"white"}
               cursor={"pointer"}>
               <RiCloseFill />
            </Flex>

            <Flex flexDirection={"column"} flexGrow={1} gap={1}>
               <Heading as={"h5"} fontSize={15}>
                  Coding 2 hr.
               </Heading>
               <Text color={"gray.500"} fontSize={11}>
                  22 Feb, 2023
               </Text>
            </Flex>
         </Flex>
      </Box>
   )
}

export default List
