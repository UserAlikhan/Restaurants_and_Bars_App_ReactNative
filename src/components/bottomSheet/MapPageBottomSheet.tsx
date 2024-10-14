import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput } from "@gorhom/bottom-sheet"
import { forwardRef, useCallback, useMemo, useRef } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { Bar } from "../../types/types";
import HorizontalImageScroll from "../HorizontalImageScroll";

type Ref = BottomSheet;

const MapPageBottomSheet = forwardRef<Ref, Bar>((props, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%', '70%', '100%'], [])

    // const bottomSheetRef = useRef<BottomSheet>(null);

    // const handleClosePress = () => bottomSheetRef.current?.close();
    // const handleOpenPress = () => bottomSheetRef.current?.expand();
    // const handleCollapsePress = () => bottomSheetRef.current?.collapse();

    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={2} disappearsOnIndex={0} {...props} />,
        []
    ) 

    return (
        <View style={styles.container}>
            {/* <Button title="Open" onPress={handleOpenPress} />
            <Button title="Close" onPress={handleClosePress} />
            <Button title="Collapse" onPress={handleCollapsePress} /> */}

            <BottomSheet 
                ref={ref} index={1} 
                snapPoints={snapPoints} enablePanDownToClose={true}
                backgroundComponent={renderBackdrop}
                handleIndicatorStyle={{ backgroundColor: "#fff" }}
                backgroundStyle={{ backgroundColor: "#1d0f4e" }}
            > 
                <View style={styles.contentContainer}>
                    <Text style={styles.containerHeadline}>{props.name}</Text>
                </View>
                {/* <HorizontalImageScroll /> */}
                <BottomSheetTextInput style={styles.input} />
            </BottomSheet>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey'
    },
    contentContainer: {
        // flex: 1,
        alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 24,
        fontWeight: '600',
        padding: 20
    },
    input: {
        marginTop: 8,
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        backgroundColor: "rgba(151, 151, 151, 0.25)",
        color: "#fff"
    }
})

export default MapPageBottomSheet