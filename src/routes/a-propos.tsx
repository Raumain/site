import { createFileRoute } from "@tanstack/react-router";
import ProjectsSelection from "@/components/projects-selection";
import SectionHeader from "@/components/section-header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import yann from "/yann.jpeg";

export const Route = createFileRoute("/a-propos")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title:
					"À Propos | Le STUDYO - Graphiste Freelance Spécialisé Design Sportif",
			},
			{
				name: "description",
				content:
					"Découvrez mon parcours : Master en Création Numérique, expérience à l'AS Monaco FC. Graphiste freelance passionné par le design sportif et l'identité visuelle.",
			},
			{
				property: "og:title",
				content: "À Propos | Le STUDYO - Yann Baudin",
			},
			{
				property: "og:description",
				content:
					"Graphiste freelance spécialisé en design sportif. Master en Création Numérique, expérience AS Monaco FC.",
			},
		],
	}),
});

function RouteComponent() {
	const highlightsRef = useScrollAnimation<HTMLParagraphElement>();

	return (
		<section
			id="a-propos"
			className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 min-h-screen bg-[#191919]"
		>
			<div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
				<header className="mb-8 sm:mb-12 md:mb-16">
					<SectionHeader
						tag="#THE_COACH"
						title="À Propos de"
						highlightedText="#moi"
						headingId="a-propos-heading"
					/>
				</header>
				<div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 w-full">
					<figure className="w-full lg:w-1/2">
						<img
							src={yann}
							alt="Yann Baudin - Graphiste freelance spécialisé en design sportif"
							className="w-full h-auto object-cover"
							loading="eager"
							fetchPriority="high"
							width="800"
							height="1000"
						/>
					</figure>
					<article className="flex flex-col justify-between w-full lg:w-1/2 h-auto lg:h-full gap-12 sm:gap-20 md:gap-24 lg:gap-28">
						<section>
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit mb-3 sm:mb-4">
								#ÉTUDES
							</h2>
							<p className="text-white font-helvetica text-sm sm:text-base md:text-lg leading-relaxed">
								Titulaire d'un Master en Création Numérique à l'Université
								Polytechnique des Hauts-de-France, j'ai acquis une solide
								expertise en design graphique, direction artistique et
								communication visuelle. Mon parcours m'a permis de développer
								une vision créative orientée storytelling et impact visuel, avec
								une sensibilité particulière pour l'univers du sport.
							</p>
						</section>
						<section>
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit mb-3 sm:mb-4">
								#EXPÉRIENCES_PRO
							</h2>
							<p className="text-white font-helvetica text-sm sm:text-base md:text-lg leading-relaxed">
								J'ai eu l'opportunité d'évoluer au sein de l'AS Monaco FC en
								tant que graphiste stagiaire. Cette expérience au cœur d'un club
								professionnel m'a permis de confronter mes compétences aux
								exigences du haut niveau : respect d'une identité forte,
								création de contenus engageants et travail en lien direct avec
								les équipes communication, marketing et social media.
							</p>
						</section>
						<section>
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit mb-3 sm:mb-4">
								#COMPÉTENCES
							</h2>
							<p className="text-white font-helvetica text-sm sm:text-base md:text-lg leading-relaxed">
								Maîtrise de la suite Adobe (Photoshop, Illustrator, InDesign,
								After Effects) et de Figma. Je conçois des visuels impactants
								pour le print et le digital : affiches, contenus réseaux
								sociaux, branding, maillots, identité visuelle, templates,
								prototypage UI… Culture sport ancrée, œil affûté, sens du détail
								et vraie capacité à livrer vite et bien. Toujours au service
								d'une identité visuelle forte et cohérente.
							</p>
						</section>
					</article>
				</div>
			</div>
			<div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
				<p
					ref={highlightsRef}
					className="text-[#44FFDD] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 opacity-0"
					aria-hidden="true"
				>
					#HIGHLIGHTS
				</p>
				<h2 className="sr-only">Projets en vedette</h2>
				<ProjectsSelection />
			</div>
		</section>
	);
}
