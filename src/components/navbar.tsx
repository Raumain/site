import { Link, useRouter } from "@tanstack/react-router";
import logo from "/logo.svg";

export default function Navbar() {
	const router = useRouter();

	const handleNavigateToSection = async (
		e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
		sectionId: string,
	) => {
		e.preventDefault();

		const currentPath = window.location.pathname;

		if (currentPath !== "/") {
			await router.navigate({
				to: "/",
				hash: sectionId,
				hashScrollIntoView: true,
			});
		} else {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<nav
			className="fixed top-0 left-0 right-0 flex items-center z-50 bg-transparent font-apotek-condensed px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24"
			aria-label="Navigation principale"
		>
			<div className="mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 md:py-10 pb-4 sm:pb-5 md:pb-6">
				<div className="flex items-center justify-between min-h-12 sm:min-h-16">
					<div className="shrink-0">
						<Link
							to="/"
							className="block focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919] rounded"
							aria-label="Retour à l'accueil"
							viewTransition
						>
							<img
								src={logo}
								alt="Le STUDYO"
								width={50}
								height={50}
								className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
								loading="eager"
							/>
						</Link>
					</div>

					<div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
						<ul className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 uppercase">
							<li>
								<Link
									to="/projets"
									className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base md:text-xl lg:text-2xl font-medium focus:outline-none focus:text-white focus:underline"
									activeProps={{
										className: "text-white",
									}}
									viewTransition
								>
									Projets
								</Link>
							</li>
							<li>
								<button
									type="button"
									onClick={(e) => handleNavigateToSection(e, "game-plan")}
									className="text-white/80 uppercase hover:text-white transition-colors duration-200 text-sm sm:text-base md:text-xl lg:text-2xl font-medium focus:outline-none focus:text-white focus:underline cursor-pointer"
									aria-label="Aller à la section services"
								>
									Services
								</button>
							</li>
							<li>
								<Link
									to="/a-propos"
									className="text-white/80 hover:text-white transition-colors duration-200 text-sm sm:text-base md:text-xl lg:text-2xl font-medium focus:outline-none focus:text-white focus:underline"
									activeProps={{
										className: "text-white",
									}}
									viewTransition
								>
									A propos
								</Link>
							</li>
						</ul>

						<button
							type="button"
							onClick={(e) => handleNavigateToSection(e, "kick-off")}
							className="inline-flex items-center justify-center px-3 sm:px-4 md:px-6 py-1 bg-[#44FFDD] text-[#191919] border border-[#44FFDD] text-sm sm:text-base md:text-xl lg:text-2xl font-medium hover:bg-[#191919] hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
							aria-label="Aller à la section contact"
						>
							Contacter
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
