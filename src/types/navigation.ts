import type { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    BottomNavigation: undefined,
    Home: undefined,
    Account: undefined
}

export type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">