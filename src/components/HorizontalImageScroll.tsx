import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";

type ImagesType = {
    images: string[]
}

const { width, height } = Dimensions.get('window')

const HorizontalImageScroll = ({ images }: ImagesType) => {

    return (
        <View style={{ height: 200, width: width }}>
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={{ flex: 1, height: 200, width: width }}>
                    <ScrollView
                        horizontal={true}
                        snapToInterval={width}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate="fast"
                        // contentContainerStyle={{ paddingHorizontal: 25 }}
                    >
                        {images?.map((image, idx) => (
                            <>
                                <Category key={idx} uri={image} />
                            </>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default HorizontalImageScroll