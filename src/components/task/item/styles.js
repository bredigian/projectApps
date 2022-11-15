import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "black",
    padding: 18,
    marginVertical: 10,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    color: "white",
  },
  itemDone: {
    fontSize: 18,
    color: "white",
    textDecorationLine: "line-through",
  },
})
