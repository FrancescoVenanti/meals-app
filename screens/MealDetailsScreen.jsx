import { View, Text, Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailsScreen({ route }) {
	const mealId = route.params.mealId;
	const meal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View>
			<Image source={{ uri: meal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{meal.title}</Text>
			<MealDetails
				textStyle={styles.detailText}
				duration={meal.duration}
				complexity={meal.complexity}
				affordability={meal.affordability}
			/>
			<Subtitle>Ingredients</Subtitle>
			<List data={meal.ingredients} />
			<Subtitle>Steps</Subtitle>
			<List data={meal.steps} />
		</View>
	);
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "bold",
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
});
