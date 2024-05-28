import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
/* import FavoriteContextProvider from "./store/context/favorite-context"; */
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "orange",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				sceneContainerStyle: {
					backgroundColor: "#fff",
				},
				drawerContentStyle: {
					backgroundColor: "orange",
				},
				drawerActiveTintColor: "#fff",
				drawerInactiveTintColor: "#eee",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoriteScreen}
				options={{
					title: "Favorites",
					drawerIcon: ({ color, size }) => <Ionicons name="bookmark" size={size} color={color} />,
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			{/* <FavoriteContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "orange",
							},
							headerTintColor: "#fff",
							headerTitleStyle: {
								fontWeight: "bold",
							},
							contentStyle: {
								backgroundColor: "#fff",
							},
						}}
					>
						<Stack.Screen
							name="DrawerScreen"
							component={DrawerNavigator}
							options={{
								title: "All Categories",
								headerShown: false,
							}}
						/>
						<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
						<Stack.Screen
							name="MealDetailsScreen"
							component={MealDetailsScreen}
							options={{
								title: "About the meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoriteContextProvider> */}
		</>
	);
}

const styles = StyleSheet.create({});
