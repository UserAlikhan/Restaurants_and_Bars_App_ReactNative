import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MainStackParamList } from "../../types/navigation"

const { width, height } = Dimensions.get('window');``

const HeaderContent = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
    return (
        <View style={{ flexDirection: 'row', gap: width / 2 - 60, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={{ flex: 2 }} onPress={() => navigation.navigate("Home")}>
                <Image
                    source={require('../../images/Logo.png')}
                    style={{ width: 45, height: 45, marginLeft: 15, marginTop: StatusBar.currentHeight && StatusBar.currentHeight / 3 }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Vibe View</Text>
        </View>
    )
}

export default HeaderContent

const styles = StyleSheet.create({
    header: {
        // marginTop: StatusBar.currentHeight,
        backgroundColor: "#fff",
        height: StatusBar.currentHeight && StatusBar.currentHeight + 70,
    },
    text: {
        marginTop: StatusBar.currentHeight && StatusBar.currentHeight / 5,
        fontSize: 32,
        color: "black",
        position: 'absolute', top: 0, left: width / 2 - 70, textAlign: 'center', textAlignVertical: 'center'
    }
})