import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
	const navigation = useNavigation();
	function selectMealItemHandler() {
		navigation.navigate("MealDetailsScreen", { mealId: id });
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [styles.button, pressed && styles.buttonPress]}
				onPress={selectMealItemHandler}
			>
				<View>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetails duration={duration} complexity={complexity} affordability={affordability} />
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		shadowOpacity: 0.26,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		marginVertical: 10,
		marginHorizontal: 4,
	},
	button: {
		flex: 1,
	},
	buttonPress: {
		opacity: 0.5,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
		margin: 8,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 14,
		color: "#888",
	},
});
