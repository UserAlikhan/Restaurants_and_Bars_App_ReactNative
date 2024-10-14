import { Dimensions, Image, Text, View } from "react-native";

type CategoryType = {
  uri: string;
};

const { width, height } = Dimensions.get("window");

const Category = ({ uri }: CategoryType) => {
  return (
    <View
      style={{
        width: width,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 1,
      }}
    >
      <View
        style={{
          width: width - 70,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          borderWidth: 7
        }}
      >
        <Image
          source={{ uri: uri }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: "cover",
            borderRadius: 5,
            borderWidth: 1,
          }}
          onError={(error) => {
            console.error("Image load error:", error);
          }}
        />
      </View>
    </View>
  );
};

export default Category;