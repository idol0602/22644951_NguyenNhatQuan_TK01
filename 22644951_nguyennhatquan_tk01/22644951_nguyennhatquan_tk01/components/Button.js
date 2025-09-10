import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonCalc({ label, onPress, type }) {
  return (
    <TouchableOpacity
      style={[styles.button, type === "operator" && styles.buttonRes]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "#F1C40F",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    elevation: 3,
  },
  buttonRes: {
    backgroundColor: "grey",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
