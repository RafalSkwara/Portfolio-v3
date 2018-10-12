export const firstReducer = (state = {
	menuHidden: true,
	lang: "en",
	activeProject: ""
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
		case "CLEAR_PROJECTS":
			return {
				...state,
				activeProject: ""
			}
		case "SET_ACTIVE_PROJECTS":
			return {
				...state,
				activeProject: action.payload
			}
		default:
			return state;
	}
}
