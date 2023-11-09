// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './screens/Home';
// import ProductInfo from './screens/ProductInfo';
// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
//         <Stack.Screen name='Home' component={Home}/>
//         <Stack.Screen name='ProductInfo' component={ProductInfo}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//App manage your task
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import man1 from './screensManageYourTask/man1';
import man2 from './screensManageYourTask/man2';
import man3 from './screensManageYourTask/man3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='man1' screenOptions={{headerShown:false}}>
        <Stack.Screen name='man1' component={man1}/>
        <Stack.Screen name='man2' component={man2}/>
        <Stack.Screen name='man3' component={man3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



