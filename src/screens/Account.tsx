import { Image, View, Platform, StatusBar } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import CustomHeader from "../components/header/CustomHeader";
import HeaderContent from "../components/header/HeaderContent";
import { useNavigation, useRoute } from "@react-navigation/native"
import { MainStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HorizontalImageScroll from "../components/HorizontalImageScroll";

const IMG_HEIGHT = 400;
const HEADER_HIGHT = Platform.OS == 'ios' ? 115 : 70 + StatusBar.currentHeight!;

export default function Account() {
    const scrollY = useSharedValue(0);
    const route = useRoute();
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const images = [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 7, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 8, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 9, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 10, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 11, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
        { id: 12, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6C90CIMJgb6P25VLZTA2x7oZm10J0E8Mlbw&s" },
    ]

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader scrollY={scrollY} IMG_HEIGHT={IMG_HEIGHT} HEADER_HIGHT={HEADER_HIGHT}>
                <HeaderContent route={route} navigation={navigation}/>
            </CustomHeader>
            <Animated.ScrollView
                bounces={false}
                scrollEventThrottle={16}
                style={{ paddingTop: HEADER_HIGHT }}
                onScroll={({ nativeEvent }) => {
                    scrollY.value = nativeEvent.contentOffset.y;
                }}
            >
                {images.map(image => (
                    <View key={image.id} style={{ height: IMG_HEIGHT, margin: 20 }}>
                        <Image
                            style={{ flex: 1, height: null, width: 'auto', borderRadius: 0 }}
                            source={{ uri: image.url }}
                        />
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    )
}