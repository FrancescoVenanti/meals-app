import { Text, View, StyleSheet } from "react-native";

const List = ({ data }) => {
	return data.map((dataPoint) => (
		<View key={dataPoint} style={styles.listItem}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
	listItem: {
		fontSize: 15,
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginVertical: 5,
		marginHorizontal: 10,
		backgroundColor: "orange",
	},
	itemText: {
		color: "#351401",
		textAlign: "center",
		fontSize: 16,
	},
});
