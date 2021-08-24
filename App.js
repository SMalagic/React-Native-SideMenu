import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  Button,
  DrawerItemList,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./Screens/Sidebar/DrawerContent";

const Stack = createStackNavigator();

const images = [
  { id: 1, uri: require("./assets/1.jpg") },
  { id: 2, uri: require("./assets/2.jpg") },
  { id: 3, uri: require("./assets/3.jpg") },
  { id: 4, uri: require("./assets/4.jpg") },
  { id: 5, uri: require("./assets/5.jpg") },
];



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={{ fontSize: 25, margin: 5 }}>{title}</Text>
  </View>
);

function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_B");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ccc" : "#aaa",
          borderRadius: 15,
        })}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}

function ScreenC({ navigation }) {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen C</Text>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ccc" : "#aaa",
          borderRadius: 15,
        })}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>Go to Screen C</Text>
      </Pressable>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 110, height: 40, aspectRatio: 3 }}
      source={require("./assets/logo.png")}
    />
  );
}

function ScreenB({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const onPressHandler = () => {
    //navigation.navigate("Screen_A");
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ccc" : "#aaa",
          borderRadius: 15,
        })}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>Go back to Screen A</Text>
      </Pressable>
      <ScrollView style={{ backgroundColor: "blue", width: "100%" }}>
        <View style={{ height: 800, margin: 2 }}>
          <Image
            source={images[0].uri}
            style={{
              flex: 1,
              height: "95%",
              width: "100%",
              borderRadius: 10,
              margin: 2,
            }}
          />
          <Image
            source={images[0].uri}
            style={{
              flex: 1,
              height: null,
              width: null,
              borderRadius: 10,
              margin: 2,
            }}
          />
          <Text style={{ fontSize: 25, margin: 2 }}>Sersdfsdfkan Malagiç</Text>

          <FlatList
            style={{ margin: 2 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Screen_A" component={ScreenA} />
        <Drawer.Screen name="Screen_B" component={ScreenB} />
        <Drawer.Screen name="Screen_C" component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
});

export default App;
