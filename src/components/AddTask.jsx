import React from "react"
import {
   Modal,
   Button,
   Input,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   ModalFooter,
   useDisclosure,
   Textarea,
   useToast,
} from "@chakra-ui/react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../Config/firebase"
import { useTaskList } from "../context/TaskListContext"

const AddTask = ({ getData }) => {
   const { getTaskListData } = useTaskList()

   const { isOpen, onOpen, onClose } = useDisclosure()
   const [newTaskData, setNewTaskData] = useState({
      title: "",
      desc: "",
      checked: false,
   })

   const toast = useToast()

   const handleChange = (e) => {
      setNewTaskData({
         ...newTaskData,
         [e.target.name]: e.target.value,
      })
   }

   const addNewTask = async () => {
      const timestamp = serverTimestamp()
      const dataWithTimestamp = { ...newTaskData, addAt: timestamp }

      try {
         const docRef = await addDoc(collection(db, "list"), dataWithTimestamp)
         console.log("Document added with ID: ", docRef.id)
         setNewTaskData({
            title: "",
            desc: "",
         })
         onClose()
         toast({
            title: "Task Added.",
            status: "success",
            duration: 5000,
            isClosable: true,
         })
         getTaskListData()
      } catch (error) {
         console.error("Error adding document: ", error)
      }
   }

   return (
      <>
         <Button onClick={onOpen} colorScheme="purple" borderRadius={"50px"} px={8}>
            Add task
         </Button>

         <Modal isOpen={isOpen} size={"xl"} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader color={"purple.500"}>Add task</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <Input
                     borderColor={"purple.400"}
                     _focus={{ borderColor: "purple.500" }}
                     variant={"flushed"}
                     type="text"
                     placeholder="Title task"
                     name="title"
                     value={newTaskData.title}
                     onChange={handleChange}
                     mb={3}
                     required
                  />
                  <Textarea
                     borderColor={"purple.400"}
                     _focus={{ borderColor: "purple.500" }}
                     resize={"none"}
                     rows={10}
                     placeholder="Task description..."
                     name="desc"
                     value={newTaskData.desc}
                     onChange={handleChange}
                  />
               </ModalBody>

               <ModalFooter>
                  <Button colorScheme="purple" mr={3} w={24} onClick={addNewTask}>
                     Add
                  </Button>
                  <Button colorScheme="gray" mr={3} w={24} onClick={onClose}>
                     Close
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}

export default AddTask
