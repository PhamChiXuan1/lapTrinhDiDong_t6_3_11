import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Database } from "./Data";

function ProductInfo({ route }) {
  const [product, setProduct] = useState({});
  const [text, setText] = useState();
  const id = route.params;
  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    for (let i = 0; i < Database.length; i++) {
      if (Database[i].id === id) {
        setProduct(Database[i]);
      }
    }
  }

  // useEffect(()=>{
  //  setText(route.params)
  // }, [route.params])
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: "100px", width: "100px", resizeMode: "contain" }}
          source={product.img}
        ></Image>
        <Text>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>{product.price}</Text>
        <Text>{product.info}</Text>

        {/* <Text>{route.params}</Text> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProductInfo;
