import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
	/* const favoriteMealsCtx = useContext(FavoriteContext);

	const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id)); */

	const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
	const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>No favorite meals found. Start adding some!</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
	},
});
