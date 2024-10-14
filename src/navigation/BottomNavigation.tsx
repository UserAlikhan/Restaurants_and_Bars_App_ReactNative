import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { HomeIcon, LocateIcon, User2Icon } from 'lucide-react-native';
import Explore from "../screens/Explore";
import Account from "../screens/Account";
import { Button, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Animated, { interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";
import { PanGestureHandler } from "react-native-gesture-handler";

const BottomNavigation = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
    const Tab = createBottomTabNavigator();
    
    // const sharedValue = useSharedValue(0)

    // const headerAnimatedStyle = useAnimatedStyle(() => {
    //     const opacity = withTiming(sharedValue.value, { duration: 300 })
    //     return {
    //         opacity,
    //     }
    // })
    
    // const onGestureEvent = useAnimatedGestureHandler<DefaultEvent, { startY: number }>({
    //     onStart: (event, context) => {
    //       context.startY = event.y;
    //     },
    //     onActive: (event, context) => {
    //       sharedValue.value = event.y - context.startY;
    //     },
    //     onEnd: () => {
    //       sharedValue.value = withSpring(0);
    //     },
    //   });

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <HomeIcon color={color} size={focused ? size : size+5}/>
                    )
                }} 
            />
            <Tab.Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ focused, color, size }) => (
                        <LocateIcon color={color} size={focused ? size : size+5}/>
                    ),
                }} 
            />
            <Tab.Screen 
                name="Account" 
                component={Account} 
                options={{
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Account",
                    tabBarIcon: ({ focused, color, size }) => (
                        <User2Icon color={color} size={focused ? size : size+5}/>
                    ),
                    // headerShown: true,
                    // headerTransparent: true,
                    // headerTitle: "",
                    // headerLeft: () => (
                    //     <PanGestureHandler onGestureEvent={onGestureEvent}>
                    //       <Animated.View style={[styles.header, headerAnimatedStyle]}>
                            // <View style={{ flexDirection: 'row', gap: width / 2 - 60, alignItems: 'center', justifyContent: 'space-evenly' }}>
                            //   <TouchableOpacity style={{ flex: 2 }} onPress={() => navigation.navigate("Home")}>
                            //     <Image
                            //       source={require('../images/Logo.png')}
                            //       style={{ width: 45, height: 45, marginLeft: 15, marginTop: StatusBar.currentHeight && StatusBar.currentHeight / 3 }}
                            //     />
                            //   </TouchableOpacity>
                            //   <Text style={styles.text}>Vibe View</Text>
                            // </View>
                    //       </Animated.View>
                    //     </PanGestureHandler>
                    //   ),
                }} 
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

// const styles = StyleSheet.create({
//     header: {
//         // marginTop: StatusBar.currentHeight,
//         backgroundColor: "#fff",
//         height: StatusBar.currentHeight && StatusBar.currentHeight + 70,
//     },
//     text: {
//         marginTop: StatusBar.currentHeight && StatusBar.currentHeight / 5,
//         fontSize: 32,
//         color: "black",
//         position: 'absolute', top: 0, left: width / 2 - 70, textAlign: 'center', textAlignVertical: 'center'
//     }
// })