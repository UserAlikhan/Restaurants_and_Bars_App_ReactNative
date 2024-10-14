import { Text, View } from "react-native";
import bars from "../data/bars";
import MapPageBottomSheet from "../components/bottomSheet/MapPageBottomSheet";

export default function Home() {
    return (
        <View style={{flex: 1}}>
            <Text>Ku!</Text>
            <MapPageBottomSheet {...bars[0]}/>
        </View>
    )
}