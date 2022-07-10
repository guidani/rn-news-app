import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Search from "./screens/Search";

import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ff0000",
          tabBarInactiveTintColor: "grey",
          headerTintColor: "#ff0000",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTitleStyle: {
            fontSize: 40,
          },
        }}
      >
        <Tab.Screen
          name="BITNews"
          component={Home}
          options={{
            tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => <Feather name="search" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
