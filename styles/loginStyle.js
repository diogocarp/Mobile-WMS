import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    marginLeft: 28,
    marginRight: 10,
    paddingLeft: 10,
    width: "82%",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#fff",
    fontSize: 15,
    height: 50,
    borderRadius: 10,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "black",
    top:620,
    position:"absolute"
  },

  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  icon: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
});
