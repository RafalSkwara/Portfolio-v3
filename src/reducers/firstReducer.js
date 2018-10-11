export const firstReducer = (state = {
	menuHidden: true,
	lang: "en"
}, action) => {
	switch(action.type) {
		case "TOGGLE_LANGUAGE":
			return {
				...state,
				lang: state.lang === "en" ? "pl" : "en"
			}
		case "TOGGLE_MENU":
			return {
				...state,
				menuHidden: !state.menuHidden
			}
		case "HIDE_MENU":
			return {
				...state,
				menuHidden: true
			}
		default:
			return state;
	}
}
