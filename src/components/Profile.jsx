import React from "react"
import { Box, Heading, Image, Text, VStack, Flex, Progress, Button } from "@chakra-ui/react"
import profileImg from "../assets/1678104648131.JPG"
import { AiFillSetting, AiFillMail, AiFillBell } from "react-icons/ai"
import { styled } from "styled-components"

const Profile = () => {
   return (
      <Box h={"100vh"} w={350} borderRight={"1px solid"} borderColor={"gray.300"}>
         <Box py={6} h={73} borderBottom={"1px solid"} borderColor={"gray.300"}>
            <Heading textAlign={"center"} textTransform={"uppercase"} color={"purple.400"} fontSize={20}>
               task manager
            </Heading>
         </Box>

         <Box borderBottom={"1px solid"} borderColor={"gray.300"} py={7} textAlign={"center"}>
            <Image
               src={profileImg}
               alt="profile-img"
               mx={"auto"}
               boxSize={90}
               borderRadius={"50%"}
               objectFit={"cover"}
            />
            <VStack mt={5} spacing={"-10px"}>
               <Text fontWeight={500}>Nattapol Eiamsa-ard</Text>
               <Text color={"gray.500"} fontSize={14}>
                  nattapol.eim@gmail.com
               </Text>
            </VStack>
            <Flex alignItems={"center"} justify={"center"} gap={5} fontSize={26} mt={5} color={"purple.400"}>
               <Button
                  sx={{
                     bg: "#eee",
                     w: "40px",
                     h: "40px",
                     p: "7px",
                     borderRadius: "50%",
                     transition: "all 300ms ease-in",
                     color: "#9f7aea",
                  }}
                  _hover={{ bg: "#9f7aea", color: "white" }}>
                  <AiFillSetting />
               </Button>
               <Button
                  sx={{
                     bg: "#eee",
                     w: "40px",
                     h: "40px",
                     p: "7px",
                     borderRadius: "50%",
                     transition: "all 300ms ease-in",
                     color: "#9f7aea",
                  }}
                  _hover={{ bg: "#9f7aea", color: "white" }}>
                  <AiFillMail />
               </Button>
               <Button
                  sx={{
                     bg: "#eee",
                     w: "40px",
                     h: "40px",
                     p: "7px",
                     borderRadius: "50%",
                     transition: "all 300ms ease-in",
                     color: "#9f7aea",
                  }}
                  _hover={{ bg: "#9f7aea", color: "white" }}>
                  <AiFillBell />
               </Button>
            </Flex>

            <Box px={10} mt={8}>
               <Box>
                  <Text fontSize={12} fontWeight={500} textAlign={"end"} mb={2} color={"gray.500"}>
                     12/34
                  </Text>
                  <Progress value={30} size={"sm"} colorScheme="purple" borderRadius={"50px"} />
               </Box>
               <Flex mt={5} justify={"space-between"}>
                  <Flex flexDirection={"column"}>
                     <Text fontSize={20} fontWeight={800} mb={1}>
                        12
                     </Text>
                     <Text fontSize={14} fontWeight={600} color={"gray.600"}>
                        Completed
                     </Text>
                     <Text fontSize={10} color={"gray.500"}>
                        Tasks
                     </Text>
                  </Flex>

                  <Flex flexDirection={"column"}>
                     <Text fontSize={20} fontWeight={800} mb={1}>
                        22
                     </Text>
                     <Text fontSize={14} fontWeight={600} color={"gray.600"}>
                        To do
                     </Text>
                     <Text fontSize={10} color={"gray.500"}>
                        Tasks
                     </Text>
                  </Flex>

                  <Flex flexDirection={"column"}>
                     <Text fontSize={20} fontWeight={800} mb={1}>
                        14
                     </Text>
                     <Text fontSize={14} fontWeight={600} color={"gray.600"}>
                        All
                     </Text>
                     <Text fontSize={10} color={"gray.500"}>
                        completed
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Box>
   )
}

export default Profile
