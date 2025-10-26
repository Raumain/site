import { Link, useRouter } from "@tanstack/react-router";
import logo from "/logo.svg";

export default function Footer() {
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

	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
			<div className="flex flex-col md:flex-row items-start justify-between w-full gap-6 md:gap-8 lg:gap-12">
				<div className="shrink-0">
					<Link
						to="/"
						aria-label="Retour à l'accueil"
						className="focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919] rounded"
					>
						<img
							src={logo}
							alt="Le STUDYO"
							width={50}
							height={50}
							className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
							loading="lazy"
						/>
					</Link>
				</div>
				<nav
					className="flex justify-between w-full md:w-auto gap-6 sm:gap-8 md:gap-12 lg:gap-16 uppercase"
					aria-label="Navigation pied de page"
				>
					<ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
						<li>
							<Link
								to="/projets"
								className="text-white text-base sm:text-lg md:text-xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline"
								viewTransition
							>
								Projets
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={(e) => handleNavigateToSection(e, "game-plan")}
								className="uppercase text-white text-base sm:text-lg md:text-xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline cursor-pointer text-left"
								aria-label="Aller à la section services"
							>
								Services
							</button>
						</li>
						<li>
							<Link
								to="/a-propos"
								className="text-white text-base sm:text-lg md:text-xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline"
								viewTransition
							>
								À Propos
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={(e) => handleNavigateToSection(e, "kick-off")}
								className="uppercase inline-flex items-center font-apotek-condensed justify-center px-3 sm:px-4 py-1 bg-[#44FFDD] text-[#191919] border border-[#44FFDD] text-base sm:text-lg md:text-xl font-medium hover:bg-[#191919] hover:text-[#44FFDD] transition-colors duration-200 w-fit focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
								aria-label="Aller à la section contact"
							>
								Contacter
							</button>
						</li>
					</ul>
					<ul className="flex flex-col gap-3 sm:gap-4 md:gap-5">
						<li>
							<a
								href="https://www.instagram.com/yannbaudin/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-apotek-condensed text-[#44FFDD] text-base sm:text-lg md:text-xl hover:underline focus:outline-none focus:underline"
								aria-label="Visiter notre page Instagram (ouvre dans un nouvel onglet)"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/yann-baudin-b87b92225/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-apotek-condensed text-[#44FFDD] text-base sm:text-lg md:text-xl hover:underline focus:outline-none focus:underline"
								aria-label="Visiter notre page LinkedIn (ouvre dans un nouvel onglet)"
							>
								Linkedin
							</a>
						</li>
						<li>
							<a
								href="https://www.behance.net/yannbaudin"
								target="_blank"
								rel="noopener noreferrer"
								className="font-apotek-condensed text-[#44FFDD] text-base sm:text-lg md:text-xl hover:underline focus:outline-none focus:underline"
								aria-label="Visiter notre page Behance (ouvre dans un nouvel onglet)"
							>
								Behance
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<hr className="border border-gray-600 w-full my-8 sm:my-10 md:my-12" />
			<div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
				<p className="font-apotek-condensed text-gray-600 text-sm sm:text-base md:text-lg text-center sm:text-left">
					Tous droits réservés © {currentYear}
				</p>
				<p className="font-apotek-condensed text-gray-600 text-sm sm:text-base md:text-lg text-center sm:text-right">
					Yann Baudin - Le STUDYO
				</p>
			</div>
		</footer>
	);
}
