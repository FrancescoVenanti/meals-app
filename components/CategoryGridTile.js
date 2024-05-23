import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
	return (
		<View style={[styles.gridItem, { backgroundColor: color }]}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [styles.button, pressed && styles.buttonPress]}
				onPress={onPress}
			>
				<View style={styles.innerContainer}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		elevation: 5,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		shadowOpacity: 0.26,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPress: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
