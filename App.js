import { StyleSheet, View } from 'react-native';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AssignmentScreen from './Screens/AssignmentScreen';
import CourseDetailScreen from './Screens/CourseDetailScreen';
import CourseMaterialsScreen from './Screens/CourseMaterialsScreen';
import LearnerScreen from './Screens/LearnerScreen';
import ParentScreen from './Screens/ParentScreen';
import MessagingScreen from './Screens/MessagingScreen';
import SettingsScreen from './Screens/SettingsScreeen';
import Chatbot from './components/Chatbot';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Screens/HomeScreen';
import TeacherMainScreen from './Screens/TeacherMainScreen';
import CourseListScreen from './Screens/CourseListScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='TeacherMainScreen' component={TeacherMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Assign' component={AssignmentScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CouseDetails' component={CourseDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CourseList' component={CourseListScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CourseMaterials' component={CourseMaterialsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Learner' component={LearnerScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Parent' component={ParentScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Messaging' component={MessagingScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen  name='Chats' component={Chatbot} options={{ headerShown: false }} />
      
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

<Tab.Screen 
      name="settings" 
      component={SettingsScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="settings"
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
