import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Locationpog from "./screens/Location";

const Stack = createNativeStackNavigator();

export default function RootNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }} 
        />
        <Stack.Screen 
            name="Location" 
            component={Locationpog} 
            options={{ title: "Localização" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}