import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainStackParamList } from "../types/navigation"
import BottomNavigation from "./BottomNavigation"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{
                        headerShown: false,
                    }}/>
                </Stack.Navigator>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default MainStack