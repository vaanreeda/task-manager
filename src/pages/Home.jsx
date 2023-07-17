import { Flex, Fade } from "@chakra-ui/react"
import List from "../components/List"
import Task from "../components/Task"
import { useEffect, useState } from "react"
import { format } from "date-fns"

//firebase
import { db } from "../../Config/firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"

const Home = () => {
   const [list, setList] = useState([])
   const [inSelected, setInSelected] = useState(!!list ? 0 : null)

   const getData = async () => {
      try {
         const q = query(collection(db, "list"), orderBy("addAt", "asc"))
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
         setList(tempList) // อัปเดต state list ด้วยข้อมูลใน tempList
      } catch (error) {
         console.error("Error fetching data:", error)
      }
   }

   useEffect(() => {
      getData()
   }, [])

   // console.log(list)
   return (
      <Flex as="main" w={"full"} h={"full"}>
         <List list={list} inSelected={inSelected} setInSelected={setInSelected} getData={getData} />
         <Flex flex={1}>
            <Task list={list} inSelected={inSelected} />
         </Flex>
      </Flex>
   )
}

export default Home
