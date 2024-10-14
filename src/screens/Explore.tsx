import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useNavigation } from "@react-navigation/native"
import bars from "../data/bars";
import BottomSheetModalComponent from "../components/bottomSheet/BottomSheetModalComponent";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Bar } from "../types/types";

const INITIAL_REGION = {
    latitude: 40.7075217,
    longitude: -74.1444877,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
}

export default function Explore() {
    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const mapRef = useRef<MapView | null>(null);
    const navigation = useNavigation();

    const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={focusMap}>
                    <View style={{ padding: 10 }}>
                        <Text>Focus</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }, [])

    const focusMap = () => {
        const Manhattan = {
            latitude: 40.7591622,
            longitude: -74.0516314,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }

        mapRef.current?.animateCamera({ center: Manhattan, zoom: 10 }, { duration: 3000 })
        // mapRef.current?.animateToRegion(GreenBayStadium);
    };

    const onRegionChange = (region: Region) => {
        console.log(region)
    }

    const onMarkerClick = (name: string) => {
        Alert.alert(name);
    }

    const onCalloutPressed = (bar: Bar) => {
        setSelectedBar(bar);
        bottomSheetRef.current?.present();
    }

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_REGION}
                userInterfaceStyle="light"
                showsUserLocation={true}
                showsMyLocationButton={true}
                onRegionChangeComplete={onRegionChange}
                ref={mapRef}
            >
                { bars.map((bar, index) => (
                    <Marker 
                        key={index} coordinate={bar.coordinates} 
                        // onPress={() => onMarkerClick(marker.name)}
                    >
                        <Callout onPress={() => onCalloutPressed(bar)}>
                            <View style={{ padding: 10, width: 'auto' }}>
                                <Text style={{ fontSize: 20 }}>{bar.name}</Text>
                            </View>
                        </Callout>
                    </Marker> 
                )) }
            </MapView>

            {
                selectedBar !== null && (
                    <BottomSheetModalComponent ref={bottomSheetRef} {...selectedBar}/>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
});