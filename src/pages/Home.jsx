import { Flex } from "@chakra-ui/react"
import List from "../components/List"
import Task from "../components/Task"
import { useState } from "react"
import { useTaskList } from "../context/TaskListContext"

const Home = () => {
   const { taskListData } = useTaskList()
   const [inSelected, setInSelected] = useState(!!taskListData ? 0 : null)

   // console.log(list)
   return (
      <Flex as="main" w={"full"} h={`calc(100% - 73px)`}>
         <List inSelected={inSelected} setInSelected={setInSelected} />
         <Flex flex={1} style={{ overflow: "hidden" }}>
            <Task inSelected={inSelected} />
         </Flex>
      </Flex>
   )
}

export default Home
