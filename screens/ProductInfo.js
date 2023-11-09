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
      <View style={{margin: '10px'}}>
        <Image
          style={{ height: "300px", width: "300px", resizeMode: "contain", left:'25px' }}
          source={product.img}
        ></Image>
        <Text style={{fontWeight:'bold'}}>{product.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'gray'}}>{product.description}</Text>
          <Text>${product.price}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: '20px'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/img/Vector.png')}
              style={styles.imgInfo}
            />
            <Text style={{color: 'gray'}}> Delivery in</Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>30 min</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../assets/img/Group 16.png')}
              style={styles.imgInfo}
            />
            <Text> 1 </Text>
            <Image
              source={require('../assets/img/Group 15.png')}
              style={styles.imgInfo}
            />
          </View>
        </View>
        <Text style={{fontWeight: 'bold'}}>Restaurents Info</Text>
        <Text>{product.info}</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', bottom: '-50px'}}>
        <TouchableOpacity>
          <View style={{backgroundColor: 'gold', height: '40px', width: '260px', borderRadius: '10px', justifyContent: 'center'}}>
            <Text style={{color:'white', textAlign:'center', fontSize: '20px'}}>Add to cart</Text>
          </View>
        </TouchableOpacity>
        </View>
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
  imgInfo:{
    height: '12px', width: '12px'
  }
});

export default ProductInfo;
