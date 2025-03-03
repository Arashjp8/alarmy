import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import tw from "twrnc";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: tw.style(
                    "bg-slate-900 border-b-[1px] ] border-white",
                ),
                headerTintColor: tw.color("white"),
                headerShadowVisible: false,
                headerTitleAlign: "center",
                tabBarStyle: tw.style(
                    "bg-slate-900 border-t-[1px] border-white",
                ),
                tabBarActiveTintColor: tw.color("white"),
            }}
        >
            <Tabs.Screen
                name={"index"}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={"about"}
                options={{
                    title: "About",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "information-circle"
                                    : "information-circle-outline"
                            }
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
