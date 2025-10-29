const anchors = document.querySelectorAll('a[href^="#"]');

function getTarget(anchor) {
	return document.querySelector(anchor.getAttribute("href"));
}

function updateActiveAnchor() {
	const active = document.querySelector("a.active");
	if (active) {
		active.classList.remove("active");
	}

	for (const anchor of anchors) {
		const target = getTarget(anchor);
		if (target) {
			const rect = target.getBoundingClientRect();
			if (Math.round(rect.y) >= 0) {
				anchor.classList.add("active");
				break;
			}
		}
	}
}

for (const anchor of anchors) {
	anchor.addEventListener("click", (e) => {
		e.preventDefault();
		const target = getTarget(anchor);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	});
}

let frame;
document.querySelector("main").addEventListener("scroll", () => {
	if (frame !== undefined) {
		cancelAnimationFrame(frame);
	}
	frame = requestAnimationFrame(() => {
		updateActiveAnchor();
	});
});
