import { createContext, useState } from "react";

export const FavoriteContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
	const [favoriteMealId, setFavoriteMealId] = useState([]);

	function addFavorite(id) {
		setFavoriteMealId((prev) => [...prev, id]);
	}

	function removeFavorite(id) {
		setFavoriteMealId((prev) => prev.filter((mealId) => mealId !== id));
	}

	const value = {
		ids: favoriteMealId,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};

	return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContextProvider;
