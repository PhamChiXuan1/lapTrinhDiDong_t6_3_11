import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { Database
 } from "./Data";

function Home({ navigation }) {
  
  const [text, setText] = useState();
  const [state, setState] = useState(Database);
  var [color, setcolor] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welcome, Jala!</Text>
      <Text style={styles.text2}>Choice you Best food</Text>

      <View style={styles.inputT}>
        <TextInput
          onChangeText={setText}
          value={text}
          style={{ width: "266px", height: "46px", position: "absolute" }}
          placeholder=" nhap ten"
        ></TextInput>
      </View>

      <View style={styles.content}>
        <View style={styles.content1}>
          <TouchableOpacity
            style={[
              { backgroundColor: "white", width: null, width: "101px",
              height: "35px",
              borderRadius: "5px",
              borderWidth: "1px",
              top: "20px", 
            },
              color == 1 ? { backgroundColor: "yellow" } : null,
            ]}
            onPress={() => {
              setState(Database);
              setcolor(1);
            }}
          >
            <View style={styles.btnC1}>
              <Text>Donut</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              { backgroundColor: "white", width: null,
              height: "35px",
              borderRadius: "5px",
              borderWidth: "1px",
              top: "20px", },
              color == 2 ? { backgroundColor: "yellow" } : null,
            ]}
            onPress={() => {
              const newArr = Database.filter((item) => {
                return item.type == "p";
              });
              setState(newArr);
              setcolor(2);
            }}
          >
            <View style={styles.btnC1}>
              <Text>Pink Donut</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              { backgroundColor: "white", width: null,
              height: "35px",
              borderRadius: "5px",
              borderWidth: "1px",
              top: "20px", },
              color == 3 ? { backgroundColor: "yellow" } : null,
            ]}
            onPress={() => {
              const newArr = Database.filter((item) => {
                return item.type == "float";
              });
              setState(newArr);
              setcolor(3);
            }}
          >
            <View style={styles.btnC1}>
              <Text>Floating</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content2}>
          <FlatList
            data={state}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: "337px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(244, 221, 221, 1)",
                    alignSelf: "center",
                    margin: "10px",

                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: "101px",
                      width: "111px",
                      resizeMode: "contain",
                      left: "10px",
                      top: "5px",
                    }}
                    source={item.img}
                  ></Image>
                  <View
                    style={{
                      flexDirection: "column",
                      left: "20px",
                      top: "10px",
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>${item.price}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProductInfo", item.id);
                    }}
                  >
                    <Image
                      style={{
                        width: "44px",
                        height: "45px",
                        resizeMode: "contain",
                        top: "70px",
                        left: "35px",
                      }}
                      source={require("../assets/img/plus_button.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text1: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "18.75px",
    color: "rgba(0, 0, 0, 0.65)",
  },

  text2: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "18.75px",
  },

  inputT: {
    width: "266px",
    height: "46px",
    borderRadius: "3px",
    borderWidth: "1px",
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    borderColor: "rgba(196, 196, 196, 1)",
    top: "10px",
  },

  content: {
    flex: 1,
  },
  content1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  content2: {
    flex: 7,
  },

  btnC1: {
    width: "101px",
    height: "35px",
    borderRadius: "5px",
    borderWidth: "1px",
    backgroundColor: "rgba(196, 196, 196, 0.17)",
    borderColor: "rgba(0, 0, 0, 0.2)",
    // top: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
