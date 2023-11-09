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

function man3({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Image
            source={require('../assets/imgManageYourTask/Container 14.png')}
            style={{height: '40px', width:'100%', resizeMode:'contain'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: '10px'}}>
        <View style={{flexDirection: 'row'}}>
            <Image
                source={require('../assets/imgManageYourTask/Image.png')}
                style={{height: '35px', width: '35px', resizeMode: 'contain'}}
            />
            <View style={{flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold'}}>Hi Twinkle</Text>
                <Text>Have agrate day ahead</Text>
            </View>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('man2')}}>
                <Text>{'<-'}</Text>
            </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: '30px'}}>ADD YOUR JOD</Text>
      </View>

      <View style={{flexDirection: 'row', borderWidth: '1px', borderRadius: '3px', borderColor: 'gray',height: '40px', width: '300px', alignItems: 'center', top: '40px', left: '30px'}}>
        <Image
            source={require('../assets/img/Vector.png')}
            style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
        />
        <TextInput placeholder="   Input your job" style={{height: '40px', width: '300px'}}>
        </TextInput>
      </View>

      <View style={{top:'150px'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('man2')}} 
                style={{height: '40px', width: '180px', backgroundColor: 'rgba(0, 189, 214, 1)', borderRadius: '10px', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: '18px', color:'white'}}>Finish{'->'}</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems:'center', top: '230px'}}>
        <Image
            source={require('../assets/imgManageYourTask/Image.png')}
            style={{height: '150px', width:'150px', resizeMode:'contain'}}
        />
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

export default man3;
