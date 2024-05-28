import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((meal) => {
		return meal.categoryIds.includes(catId);
	});

	/* this is used when you want to run this effect while the component is rendering, so the jump is smooth */
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [navigation, catId]);

	return <MealsList items={displayedMeals} />;
};

export default MealOverviewScreen;
