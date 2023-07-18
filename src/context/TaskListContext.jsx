import React, { createContext, useContext, useEffect, useState } from "react"
import { db } from "../Config/firebase.js"
import { getDocs, query, orderBy, collection, deleteDoc, doc } from "firebase/firestore"
import { format } from "date-fns"

const taskListContext = createContext()

export function useTaskList() {
   return useContext(taskListContext)
}

const TaskListContextProvider = ({ children }) => {
   const [taskListData, setTaskListData] = useState([])

   const getTaskListData = async () => {
      try {
         const q = query(collection(db, "list"), orderBy("addAt", "desc"))
         const querySnapshot = await getDocs(q)
         const tempList = []
         querySnapshot.forEach((doc) => {
            // อ่าน id จาก doc.id และข้อมูลจาก doc.data()
            const data = doc.data()
            const addAt = data.addAt && data.addAt.toDate()
            const item = {
               id: doc.id,
               ...doc.data(),

               // แปลง timestamp
               addAt: format(addAt, "dd MMM, yyyy"),
            }
            tempList.push(item)
         })
         setTaskListData(tempList) // อัปเดต state list ด้วยข้อมูลใน tempList
      } catch (error) {
         console.error("Error fetching data:", error)
      }
   }

   const deleteTask = async (id) => {
      await deleteDoc(doc(db, "list", id))
      getTaskListData()
   }

   useEffect(() => {
      getTaskListData()
   }, [])

   return (
      <taskListContext.Provider value={{ taskListData, getTaskListData, deleteTask }}>
         {children}
      </taskListContext.Provider>
   )
}

export default TaskListContextProvider
