import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Vérifier si l'utilisateur préfère réduire les animations
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		if (prefersReducedMotion) {
			element.classList.remove("animate-slide-up-fade");
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-slide-up-fade");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			},
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, []);

	return ref;
}
