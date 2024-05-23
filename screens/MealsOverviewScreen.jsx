import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

	function renderMealItem(itemData) {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};
		return <MealItem {...mealItemProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
		</View>
	);
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
