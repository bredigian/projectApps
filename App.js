import {
  Button,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { styles } from "./styles/styles"
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
    <TouchableOpacity
      style={styles.item}
      onPress={() => onHandleSelected(item)}
    >
      <Text style={styles.itemText}>{item.value}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.itemContainerTitle}>Task List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task name"
          placeholderTextColor={"black"}
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button
          disabled={!task}
          color={"black"}
          title="Add"
          onPress={onHandleTask}
        />
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetail}>
            <Text style={styles.modalDetailTitle}>
              Are you sure to delete this task?
            </Text>
            <Text style={styles.modalDetailTask}>{selectedTask.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" onPress={onHandleCancel} color="black" />
            <Button title="Confirm" onPress={onHandleConfirm} color="black" />
          </View>
        </View>
      </Modal>
    </View>
  )
}
