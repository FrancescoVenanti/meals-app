import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;
	const meal = MEALS.find((meal) => meal.id === mealId);
	/* const favoriteMealsCtx = useContext(FavoriteContext);

	const isFavorite = favoriteMealsCtx.ids.includes(mealId);

	function changeFavoriteStatusHandler() {
		if (isFavorite) {
			favoriteMealsCtx.removeFavorite(mealId);
		} else {
			favoriteMealsCtx.addFavorite(mealId);
		}
	} */

	const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);
	const isFavorite = favoriteMeals.includes(mealId);

	const dispatch = useDispatch();

	function changeFavoriteStatusHandler() {
		if (isFavorite) {
			dispatch(removeFavorite({ id: mealId }));
		} else {
			dispatch(addFavorite({ id: mealId }));
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: meal.title,
			headerRight: () => {
				return (
					<IconButton
						onPress={changeFavoriteStatusHandler}
						icon={isFavorite ? "bookmark" : "bookmark-outline"}
						color="white"
					/>
				);
			},
		});
	}, [navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: meal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{meal.title}</Text>
			<MealDetails
				textStyle={styles.detailText}
				duration={meal.duration}
				complexity={meal.complexity}
				affordability={meal.affordability}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={meal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={meal.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 16,
	},
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
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
	},
});
