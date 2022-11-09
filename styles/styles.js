import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    alignItems: "center",
    padding: 25,
    paddingTop: 50,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "80%",
    color: "black",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  button: {
    color: "black",
  },
  itemContainer: {
    width: "100%",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 80,
  },
  item: {
    width: "100%",
    backgroundColor: "black",
    padding: 18,
    marginVertical: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: "white",
  },
  itemContainerTitle: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
  modalButtonContainer: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalDetailTitle: {
    fontSize: 15,
    textAlign: "center",
  },
  modalDetailTask: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
})
