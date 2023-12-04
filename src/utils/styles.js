import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  widthFull:{
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFullWidth: {
    flex: 1,
    width: width,
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eeeee4",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
  },
  header: {
      backgroundColor: "#B8F5C1",
      width: "100%",
      height: "10%",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      borderWidth: 5,
      borderColor: "#9BDEB8",
    },
    headerTextStyle: {
      fontWeight: "bold",
      fontSize: 25,
    }
});

export default styles;