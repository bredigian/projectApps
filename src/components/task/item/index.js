import { Button, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"

import { styles } from "./styles"

const TaskItem = ({ item, onHandleSelected }) => {
  const [taskDone, setTaskDone] = useState(false)
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onHandleSelected(item)}
    >
      <View style={styles.itemContainer}>
        <Text style={!taskDone ? styles.itemText : styles.itemDone}>
          {item.value}
        </Text>
        <Button
          title="Done!"
          color={"black"}
          onPress={() => setTaskDone(!taskDone)}
        />
      </View>
    </TouchableOpacity>
  )
}

export default TaskItem
