import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
			<Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
		</View>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 10,
	},
	detailItem: {
		fontSize: 15,
	},
});
