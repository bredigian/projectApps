import { Button, Modal, Text, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const ModalItem = ({
  modalVisible,
  selectedTask,
  onHandleCancel,
  onHandleConfirm,
}) => {
  return (
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
  )
}

export default ModalItem
