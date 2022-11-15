import { AddItem, ModalItem, TaskItem, TaskList } from "./components"
import { Text, View } from "react-native"

import { styles } from "./styles"
import { useState } from "react"

export default function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(false)

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [
      { id: Math.random().toString(), value: task },
      ...prevTaskList,
    ])
    setTask("")
  }

  const onHandleChange = (text) => setTask(text)

  const onHandleCancel = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleConfirm = () => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedTask.id)
    )
    setModalVisible(!modalVisible)
  }
  const onHandleSelected = (item) => {
    setSelectedTask(item)
    setModalVisible(!modalVisible)
  }
  const renderItem = ({ item }) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )
  return (
    <View style={styles.container}>
      <Text style={styles.itemContainerTitle}>Task List</Text>
      <AddItem
        task={task}
        onHandleTask={onHandleTask}
        onHandleChange={onHandleChange}
      />
      <TaskList
        taskList={taskList}
        renderItem={renderItem}
        id={(item) => item.id}
      />
      <ModalItem
        modalVisible={modalVisible}
        onHandleCancel={onHandleCancel}
        onHandleConfirm={onHandleConfirm}
        selectedTask={selectedTask}
      />
    </View>
  )
}
