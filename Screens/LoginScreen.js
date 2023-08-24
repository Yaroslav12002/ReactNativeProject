import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background-mountain.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Увійти</Text>
        <TextInput style={styles.input}></TextInput>
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
  text: { color: "#fff", fontSize: 30 },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    height: 50,
    marginHorizontal: 16,
  },
});
