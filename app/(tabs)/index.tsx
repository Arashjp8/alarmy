import { Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
    return (
        <View style={tw`bg-slate-950 flex-1 justify-center items-center gap-2`}>
            <Text style={tw`text-white text-lg`}>Moo 🐮</Text>
            <Text style={tw`text-white text-lg`}>Moo 🐮</Text>
        </View>
    );
}
