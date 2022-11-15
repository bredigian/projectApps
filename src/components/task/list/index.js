import { FlatList, View } from "react-native"

import React from "react"
import { styles } from "../list/styles"

const TaskList = ({ taskList, renderItem, id }) => {
  return (
    <View style={styles.itemContainer}>
      <FlatList data={taskList} renderItem={renderItem} keyExtractor={id} />
    </View>
  )
}

export default TaskList
