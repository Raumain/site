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
		<footer className="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-16 sm:mt-20 md:mt-24 lg:mt-28">
			<div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-0">
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
					className="flex flex-col sm:flex-row justify-between w-full md:w-auto gap-8 sm:gap-12 md:gap-16 lg:gap-24 uppercase"
					aria-label="Navigation pied de page"
				>
					<ul className="flex flex-col gap-4 sm:gap-6 md:gap-8">
						<li>
							<Link
								to="/projets"
								className="text-white text-xl sm:text-2xl md:text-3xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline"
								viewTransition
							>
								Projets
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={(e) => handleNavigateToSection(e, "game-plan")}
								className="text-white text-xl sm:text-2xl md:text-3xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline cursor-pointer text-left"
								aria-label="Aller à la section services"
							>
								Services
							</button>
						</li>
						<li>
							<Link
								to="/a-propos"
								className="text-white text-xl sm:text-2xl md:text-3xl font-apotek-condensed hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:text-[#44FFDD] focus:underline"
								viewTransition
							>
								À Propos
							</Link>
						</li>
						<li>
							<button
								type="button"
								onClick={(e) => handleNavigateToSection(e, "kick-off")}
								className="inline-flex items-center font-apotek-condensed justify-center px-4 sm:px-6 py-1 bg-[#44FFDD] text-[#191919] border border-[#44FFDD] text-xl sm:text-2xl md:text-3xl font-medium hover:bg-[#191919] hover:text-[#44FFDD] transition-colors duration-200 w-fit focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
								aria-label="Aller à la section contact"
							>
								Contacter
							</button>
						</li>
					</ul>
					<ul className="flex flex-col gap-4 sm:gap-6 md:gap-8">
						<li>
							<a
								href="https://www.instagram.com/yannbaudin/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-apotek-condensed text-[#44FFDD] text-xl sm:text-2xl md:text-3xl hover:underline focus:outline-none focus:underline"
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
								className="font-apotek-condensed text-[#44FFDD] text-xl sm:text-2xl md:text-3xl hover:underline focus:outline-none focus:underline"
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
								className="font-apotek-condensed text-[#44FFDD] text-xl sm:text-2xl md:text-3xl hover:underline focus:outline-none focus:underline"
								aria-label="Visiter notre page Behance (ouvre dans un nouvel onglet)"
							>
								Behance
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<hr className="border border-gray-600 w-full my-12 sm:my-16 md:my-20" />
			<div className="flex flex-col sm:flex-row items-center justify-between w-full mb-6 sm:mb-8 gap-4 sm:gap-0">
				<p className="font-apotek-condensed text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left">
					Tous droits réservés © {currentYear}
				</p>
				<p className="font-apotek-condensed text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-right">
					Yann Baudin - Le STUDYO
				</p>
			</div>
		</footer>
	);
}
