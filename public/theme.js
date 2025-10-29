if (!localStorage.getItem("theme")) {
	localStorage.setItem(
		"theme",
		window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light",
	);
}
applyTheme();

function toggleTheme() {
	const theme = localStorage.getItem("theme");
	localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	applyTheme();
}

function applyTheme() {
	const theme = localStorage.getItem("theme");
	document.documentElement.dataset.theme = theme;
}

window.addEventListener("load", () => {
	document
		.querySelector("#theme-toggle")
		.addEventListener("click", toggleTheme);
});
