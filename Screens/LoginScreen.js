import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background-mountain.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Увійти</Text>
          <View>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput style={styles.input} secureTextEntry={true}></TextInput>
          </View>
          <Button title={"Увійти"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  form: { marginHorizontal: 16 },
  inputTitle: { color: "#fff", fontSize: 30 },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    height: 50,
  },
});
