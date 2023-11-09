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

const data=[
    {
        taskName: 'To check email',
    },
    {
        taskName: 'UI task web page',
    },
    {
        taskName: 'Learn javascript basic',
    },
    {
        taskName: 'Learn HTML advance',
    },
    {
        taskName: 'Medical app UI',
    },
    {
        taskName: 'Learn Java',
    },
]

function man2({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Image
            source={require('../assets/imgManageYourTask/Container 14.png')}
            style={{height: '40px', width:'100%', resizeMode:'contain'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: '10px'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('man1')}}>
            <Text>{'<-'}</Text>
        </TouchableOpacity>
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
      </View>

      <View style={{flexDirection: 'row', borderWidth: '1px', borderRadius: '3px', borderColor: 'gray',height: '40px', width: '300px', alignItems: 'center', top: '40px', left: '30px'}}>
        <Image
            source={require('../assets/img/Vector.png')}
            style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
        />
        <TextInput placeholder="   Search" style={{height: '40px', width: '300px'}}>
        </TextInput>
      </View>
      <View style={{top:'80px'}}>
        <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <View style={{height: '50px', width:'300px', borderRadius:'40px', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', left: '30px', marginBottom: '10px'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <TouchableOpacity style={{width:'50px'}}>
                                <Image
                                    source={require('../assets/img/Vector.png')}
                                    style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
                                />  
                            </TouchableOpacity>
                            <Text style={{width:'200px'}}>{item.taskName}</Text>
                            <View style={{width:'50px'}}>
                                <Image
                                    source={require('../assets/img/Vector.png')}
                                    style={{height:'20px', width:'20px', resizeMode:'contain', left: '5px'}}
                                />
                            </View>
                        </View>
                    </View>
                )
            }}
        />
      </View>

      <View style={{top:'140px', alignItems: 'center'}}>
        <View style={{height: '50px', width: '50px', backgroundColor:'rgba(0, 189, 214, 1)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('man3')}}>
                <Text style={{fontSize: '30px', color: 'white'}}>+</Text>
            </TouchableOpacity>
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
  content: {
    flex: 8,
  }
  
});

export default man2;
