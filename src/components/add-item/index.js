import { Button, TextInput, View } from "react-native"

import React from "react"
import { styles } from "./styles"

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Task name"
        placeholderTextColor={"black"}
        style={styles.input}
        value={task}
        onChangeText={onHandleChange}
      />
      <Button
        disabled={!task}
        color={"black"}
        title="Add"
        onPress={onHandleTask}
      />
    </View>
  )
}

export default AddItem
