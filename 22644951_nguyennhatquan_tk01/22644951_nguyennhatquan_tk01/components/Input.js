import { TextInput, StyleSheet } from "react-native";

export default function Input({ value }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      editable={false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
  },
});
