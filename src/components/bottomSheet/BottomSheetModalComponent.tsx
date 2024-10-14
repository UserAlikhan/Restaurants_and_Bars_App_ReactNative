import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useMemo, useState } from "react";
import { Bar } from "../../types/types";
import { StyleSheet, Text, View } from "react-native";
import { CircleX, Star } from "lucide-react-native";
import HorizontalImageScroll from "../HorizontalImageScroll";

export type Ref = BottomSheetModal

const BottomSheetModalComponent = forwardRef<Ref, Bar>((props, ref) => {
    const [iconColor, setIconColor] = useState<string>("grey");

    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const { dismiss } = useBottomSheetModal();

    return (
        <BottomSheetModal 
            ref={ref} index={0} snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: "#fff" }}
            backgroundStyle={{ backgroundColor: "#1d0f4e" }}
        >
            <CircleX 
                color={iconColor} size={36} 
                style={{ position: "absolute", top: 0, right: 15 }} 
                onPress={() => dismiss()}
                onPressIn={() => setIconColor("red")}
                onPressOut={() => setIconColor("grey")}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.containerHeadline}>{props.name}</Text>
                {/* images */}
                <HorizontalImageScroll images={props.images} />
                {/* information part */}
                <View style={{ 
                    width: '100%', height: 'auto', paddingHorizontal: 10, 
                    marginTop: 25, flexDirection: 'row', 
                    justifyContent: 'space-between'
                    // alignItems: 'center'
                }}>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            {props.address}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            {props.state}  -  {props.city}
                        </Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            Rating: {props.rating}{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                            /5{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey", alignContent: 'flex-end' }}>
                            {props.zipCode}
                        </Text>
                    </View>
                </View>
                {/* Discription Part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10, 
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 20, color: "#d5dbdb" }}>
                        {props.description} 
                    </Text>
                </View>
            </View>
        </BottomSheetModal>
    )
})

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 28,
        marginBottom: 15,
        color: "#fff",
        fontWeight: '600',
        padding: 20
    },
})

export default BottomSheetModalComponent