import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import AddTask from "./addTask"
import { useTaskList } from "../context/TaskListContext"

const List = ({ inSelected, setInSelected }) => {
   const { taskListData } = useTaskList()

   const handleSelect = (index) => {
      setInSelected(index)
   }

   return (
      <Box as="section" w={"25rem"} h="100%" borderRight={"1px solid"} borderColor={"gray.300"} bg={"gray.100"}>
         <Flex w={"full"} h={"80px"} borderBottom={"1px solid"} borderColor={"gray.300"}>
            <Flex
               w={"full"}
               h={"full"}
               align={"center"}
               justify={"center"}
               fontWeight={600}
               fontSize={20}
               textTransform={"uppercase"}
               bg={"white"}
               color={"purple.400"}
               borderLeft={"6px solid"}>
               Tasks
            </Flex>
         </Flex>

         <Box height={`calc(100% - 160px)`} overflowY={"auto"}>
            {!!taskListData &&
               taskListData.map((task, index) => (
                  <Flex
                     key={task.id}
                     onClick={() => handleSelect(index)}
                     h={20}
                     align={"center"}
                     justify={"space-between"}
                     borderBottom={"1px solid"}
                     borderColor={"gray.300"}
                     px={8}
                     gap={5}
                     bg={task.checked ? "gray.200" : "white"}
                     borderRight={"5px solid"}
                     borderRightColor={inSelected === index ? "purple.400" : "transparent"}
                     cursor={"pointer"}
                     style={{
                        transition: "border-right-color 300ms",
                     }}>
                     <Flex
                        align={"center"}
                        justify={"center"}
                        h={"50px"}
                        w={"50px"}
                        bg={task.checked ? "green.100" : "purple.400"}
                        border={"2px solid"}
                        borderColor={task.checked ? "green.400" : "purple.400"}
                        borderRadius={"50%"}
                        fontSize={32}
                        color={task.checked ? "green.400" : "white"}
                        cursor={"pointer"}>
                        {task.checked ? <BsCheck /> : <RiCloseFill />}
                     </Flex>
                     <Flex flexDirection={"column"} flexGrow={1} gap={1}>
                        <Heading
                           as={"h5"}
                           fontSize={15}
                           textDecor={task.checked ? "line-through" : "none"}
                           color={task.checked ? "gray.500" : "black"}>
                           {task.title}
                        </Heading>
                        <Text color={"gray.500"} fontSize={11}>
                           {task.addAt}
                        </Text>
                     </Flex>
                  </Flex>
               ))}
         </Box>

         <Flex bg={"white"} w={"full"} h={"80px"} align={"center"} justify={"center"}>
            <AddTask />
         </Flex>
      </Box>
   )
}

export default List
