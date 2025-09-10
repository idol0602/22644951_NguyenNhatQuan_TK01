import { View, Text,TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';

export default function Calculator() {

  const [number, setNumber] = useState('0');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState(null);

  const handleChangeNumber = (value) => {
    if(value === 'C') {
      setNumber('0')
      setResult('')
      setOperator(null)
      return
    }

    if(['+','-','*','/'].includes(value)) {
      if(result === '' && number !== '0') {
        setResult(parseFloat(number))
      } else if(result !== '' && number !== '0') {
        calculate(parseFloat(number))
      }
      setOperator(value)
      setNumber('0')
      return
    }

    if(value === '=') {
      if(operator && number !== '0') {
        calculate(parseFloat(number))
        setOperator(null)
      }
      return
    }

    if(number === '0') {
      setNumber(value.toString())
    } else {
      setNumber(number + value.toString())
    }
  }

  const calculate = (num) => {
    let res = result
    if(operator === '+') res = result + num
    if(operator === '-') res = result - num
    if(operator === '*') res = result * num
    if(operator === '/') res = result / num
    setResult(res)
    setNumber(res.toString())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator Programs</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={number}
          editable={false}
        />
      </View>
      <View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(1)}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(2)}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(3)}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(4)}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(5)}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(6)}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(7)}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(8)}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(9)}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber(0)}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleChangeNumber('C')}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.buttonRes} onPress={()=>handleChangeNumber('+')}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonRes} onPress={()=>handleChangeNumber('-')}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonRes} onPress={()=>handleChangeNumber('*')}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonRes} onPress={()=>handleChangeNumber('/')}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.buttonRes} onPress={()=>handleChangeNumber('=')}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Result is: {result}</Text>
      </View>
    </View>
  )
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
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    margin : 10,
    backgroundColor: "#F1C40F",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    elevation: 3
  },
  buttonRes: {
    fontWeight: "bold",
    margin : 10,
    backgroundColor: "grey",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    elevation: 3
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
})
