export const firstReducer = (state = {
	menuHidden: true
}, action) => {
	switch(action.type) {
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
