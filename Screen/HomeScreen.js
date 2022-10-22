import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>Fly With Me</Text>
        <Feather name="user" size={30} color="white" />
      </View>
      <View style={styles.UIContainer}>
        <Text>Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/takeOff.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="contoh: Jakarta"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Tujuan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/landing.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="contoh: Jepang"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="DD/MM/YYYY"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          copyright Tegar Argie Desmonda - 120140253
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#ADEFD1FF",
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 1,
    borderColor: "#00203FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#00203FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 200,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ADEFD1FF",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#00203FFF",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "#ADEFD1FF",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#00203FFF",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
