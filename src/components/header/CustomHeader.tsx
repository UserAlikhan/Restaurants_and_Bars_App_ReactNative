import React from "react";
import Animated, { interpolate, useDerivedValue, clamp, Extrapolation } from "react-native-reanimated"
import { CustomHeaderProps } from "../../types/types";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const CustomHeader = ({ scrollY, IMG_HEIGHT, HEADER_HIGHT, children }: CustomHeaderProps) => {

    const clampVal = clamp(scrollY.value, 0, HEADER_HIGHT)

    const headerOpacity = useDerivedValue(() => {
        // const inputRange = [0, IMG_HEIGHT / 2, IMG_HEIGHT];
        const inputRange = [0, IMG_HEIGHT / 2, height - HEADER_HIGHT]
        const outputRange = [1, 1, 0];
        return interpolate(scrollY.value, inputRange, outputRange);
    });

    const headerTranslateY = useDerivedValue(() => {
        // const inputRange = [0, HEADER_HIGHT];
        // const outputRange = [0, -HEADER_HIGHT];
        const inputRange = [0, IMG_HEIGHT, height - HEADER_HIGHT];
        const outputRange = [0, -HEADER_HIGHT, -HEADER_HIGHT * 2];
        return interpolate(scrollY.value, inputRange, outputRange, Extrapolation.CLAMP);
    });

    return (
        <Animated.View style={
            [styles.animatedView, 
                {
                    height: HEADER_HIGHT, 
                    opacity: headerOpacity, 
                    transform: [{ translateY: headerTranslateY, }]
                }
            ]}
        >
            {children}
        </Animated.View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    animatedView: {
        position: 'absolute', 
        left: 0, right: 0,
        top: 0, 
        backgroundColor: '#fff',
        zIndex: 1000,
        elevation: 1000,
        alignItems: 'center',
        justifyContent: 'center'
    }
})