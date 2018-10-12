export function toggleMenu() {
	return {
		type: "TOGGLE_MENU",
	};
}
export function hideMenu() {
	return {
		type: "HIDE_MENU"
	};
}
export function toggleLanguage() {
	return {
		type: "TOGGLE_LANGUAGE"
	};
}
export function clearProjects() {
	return {
		type: "CLEAR_PROJECTS"
	};
}
export function setActiveProject(str) {
	return {
		type: "SET_ACTIVE_PROJECTS",
		payload: str
	};
}
