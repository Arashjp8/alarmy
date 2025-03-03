import { Text, View } from "react-native";
import tw from "twrnc";

export default function about() {
    return (
        <View style={tw`bg-slate-950 flex-1 justify-center items-center`}>
            <Text style={tw`text-xl text-white`}>about</Text>
        </View>
    );
}
