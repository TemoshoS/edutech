import { StyleSheet, View } from 'react-native';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Register'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#808080',
      inactiveTintColor: '#AFEEEE',
      
    }}
   
    >
      <Tab.Screen 
      name="home" 
      component={MainStack} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={color}
            size={size}
            
          />
        ),
      }}
      />
     
    
<Tab.Screen 
      name="profile" 
      component={ProfileScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="account"
            color={color}
            size={size}
          />
        ),
      }}/>

 
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
