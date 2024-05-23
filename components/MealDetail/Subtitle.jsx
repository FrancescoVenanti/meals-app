import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subContainer: {
		padding: 10,
		borderBottomColor: "#e2b497",
		borderBottomWidth: 2,
		marginHorizontal: 12,
		marginVertical: 8,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#e2b497",
	},
});
