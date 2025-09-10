import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "./components/Input";
import ButtonCalc from "./components/Button";

export default function Calculator() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState(null);

  const handleChangeNumber = (value) => {
    if (value === "C") {
      setNumber("0");
      setResult("");
      setOperator(null);
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (result === "" && number !== "0") {
        setResult(parseFloat(number));
      } else if (result !== "" && number !== "0") {
        calculate(parseFloat(number));
      }
      setOperator(value);
      setNumber("0");
      return;
    }

    if (value === "=") {
      if (operator && number !== "0") {
        calculate(parseFloat(number));
        setOperator(null);
      }
      return;
    }

    if (number === "0") {
      setNumber(value.toString());
    } else {
      setNumber(number + value.toString());
    }
  };

  const calculate = (num) => {
    let res = result;
    if (operator === "+") res = result + num;
    if (operator === "-") res = result - num;
    if (operator === "*") res = result * num;
    if (operator === "/") res = result / num;
    setResult(res);
    setNumber(res.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator Programs</Text>
      <View style={styles.inputContainer}>
        <Input value={number} />
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="1" onPress={() => handleChangeNumber(1)} />
          <ButtonCalc label="2" onPress={() => handleChangeNumber(2)} />
          <ButtonCalc label="3" onPress={() => handleChangeNumber(3)} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="4" onPress={() => handleChangeNumber(4)} />
          <ButtonCalc label="5" onPress={() => handleChangeNumber(5)} />
          <ButtonCalc label="6" onPress={() => handleChangeNumber(6)} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="7" onPress={() => handleChangeNumber(7)} />
          <ButtonCalc label="8" onPress={() => handleChangeNumber(8)} />
          <ButtonCalc label="9" onPress={() => handleChangeNumber(9)} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="0" onPress={() => handleChangeNumber(0)} />
          <ButtonCalc label="C" onPress={() => handleChangeNumber("C")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="+" type="operator" onPress={() => handleChangeNumber("+")} />
          <ButtonCalc label="-" type="operator" onPress={() => handleChangeNumber("-")} />
          <ButtonCalc label="*" type="operator" onPress={() => handleChangeNumber("*")} />
          <ButtonCalc label="/" type="operator" onPress={() => handleChangeNumber("/")} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonCalc label="=" type="operator" onPress={() => handleChangeNumber("=")} />
        </View>
        <Text style={styles.subtitle}>Result is: {result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(196, 196, 196)",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
    height: 50,
  },
});
