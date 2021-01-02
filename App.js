import React, { Component, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import Home from './screens/Home'
import Register from './screens/Register'
import Loading from './screens/Loading'
import Profile from './screens/Profile'
import History from './screens/History'
import Notify from './screens/Notify'
import DetailSubject from './screens/DetailSubject'
import IntroTest from './screens/IntroTest'
import DetailTest from './screens/DetailTest'
import HistoryDetail from './screens/HistoryDetail'
import Finish from './screens/Finish'
import AddQuestion from "./screens/AddQuestion"
import DetailAddQuestion from "./screens/DetailAddQuestion";
import AddTest from "./screens/AddTest";
import EditProfile from "./screens/EditProfile";
import DetailAddTest from "./screens/DetailAddTest";

const pro = createStackNavigator() ;
function profiles(){
    return(
        <pro.Navigator>
            <pro.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <pro.Screen name="AddQuestion" component={AddQuestion} options={{title: 'Thêm câu hỏi'  }} />
            <pro.Screen name="DetailAddQuestion" component={DetailAddQuestion} options={{title: 'Thêm câu hỏi'  }} />
            <pro.Screen name="DetailAddTest" component={DetailAddTest} options={{title: 'Thêm bài thi'  }} />
            <pro.Screen name="AddTest" component={AddTest} options={{title: 'Thêm bài thi'  }} />
            <pro.Screen name="EditProfile" component={EditProfile} options={{title: 'Sửa thông tin cá nhân'  }} />

        </pro.Navigator>
    )
}

const HomeStack = createStackNavigator() ;
function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeS" component={Home}
      options={{ headerShown: false }}
      />
      <HomeStack.Screen name="DetailSubject" component={DetailSubject} options={({ route }) => ({ title: route.params.name })} />
      <HomeStack.Screen name="IntroTest" component={IntroTest} options={({ route }) => ({ title: route.params.name })} />
      <HomeStack.Screen name="HistoryDetail" component={HistoryDetail} options={({ route }) => ({ title: route.params.name })} />
      <HomeStack.Screen name="DetailTest" component={DetailTest} options={{ headerShown: false }} />
      <HomeStack.Screen name="Finish" component={Finish} options={{ headerShown: false }} />
      <HomeStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const Main = createBottomTabNavigator();
function MainScr (){
  return(
      <Main.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
            }else if(route.name === 'Notifications'){
              iconName = focused ? 'notifications' : 'notifications-outline' ;
            }else if(route.name === 'Profile'){
              iconName = focused ? 'person-circle' : 'person-circle-outline' ;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Main.Screen name="Home" component={HomeStackScreen} />
        <Main.Screen name="History" component={History} />
        <Main.Screen name="Notifications" component={Notify} />
        <Main.Screen name="Profile" component={profiles}  />
      </Main.Navigator>
    )

}


export default function App()  {

    const [userName, setUserName] = useState(null);
        const Stack = createStackNavigator();
        const MainScreen = createBottomTabNavigator();
         useEffect( () => {
           const  _retrieveData = async () => {
                try {
                  const value = await AsyncStorage.getItem('userName');

                  if (value !== null) {
                    // We have data!!
                    setUserName(value)
                  }
                } catch (error) {
                  // Error retrieving data
                }
              };
              _retrieveData() ;

        });

        return (


            <NavigationContainer>

                    {userName == null ? (

                        <Stack.Navigator>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }} />
                        <Stack.Screen name="Main" component={MainScr} options={{ headerShown: false }} />
                        </Stack.Navigator>


                    ):(
                      <MainScreen.Navigator
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;

                          if (route.name === 'Home') {
                            iconName = focused
                              ? 'home'
                              : 'home-outline';
                          } else if (route.name === 'History') {
                            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                          }else if(route.name === 'Notifications'){
                            iconName = focused ? 'notifications' : 'notifications-outline' ;
                          }else if(route.name === 'Profile'){
                            iconName = focused ? 'person-circle' : 'person-circle-outline' ;
                          }

                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                      })}
                      tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                      }}
                      >
                        <MainScreen.Screen name="Home" component={HomeStackScreen} />
                        <MainScreen.Screen name="History" component={History} />
                        <MainScreen.Screen name="Notifications" component={Notify} />
                        <MainScreen.Screen name="Profile" component={Profile} />
                        </MainScreen.Navigator>

                    )}
                </NavigationContainer>

        )

}
