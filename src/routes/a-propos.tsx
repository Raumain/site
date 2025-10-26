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
				<div className="flex flex-col lg:grid lg:grid-cols-2 items-start justify-center gap-8 w-full lg:grid-rows-1">
					<figure className="w-full">
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
					<article className="flex flex-col justify-between w-full h-full gap-6 sm:gap-8 md:gap-10 lg:gap-12">
						<section className="flex flex-col">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-[clamp(0.8rem,1.2vw,5rem)] px-4 sm:px-6 md:px-8 py-1 w-fit mb-2 sm:mb-3">
								#ÉTUDES
							</h2>
							<p className="text-white text-[clamp(0.55rem,0.9vw,5rem)] leading-snug sm:leading-normal">
								Titulaire d'un Master en Création Numérique à l'Université
								Polytechnique des Hauts-de-France, j'ai acquis une solide
								expertise en design graphique, direction artistique et
								communication visuelle. Mon parcours m'a permis de développer
								une vision créative orientée storytelling et impact visuel, avec
								une sensibilité particulière pour l'univers du sport.
							</p>
						</section>
						<section className="flex flex-col">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-[clamp(0.8rem,1.2vw,5rem)] px-4 sm:px-6 md:px-8 py-1 w-fit mb-2 sm:mb-3">
								#EXPÉRIENCES_PRO
							</h2>
							<p className="text-white text-[clamp(0.55rem,0.9vw,5rem)] leading-snug sm:leading-normal">
								J'ai eu l'opportunité d'évoluer au sein de l'AS Monaco FC en
								tant que graphiste stagiaire. Cette expérience au cœur d'un club
								professionnel m'a permis de confronter mes compétences aux
								exigences du haut niveau : respect d'une identité forte,
								création de contenus engageants et travail en lien direct avec
								les équipes communication, marketing et social media.
							</p>
						</section>
						<section className="flex flex-col">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-[clamp(0.8rem,1.2vw,5rem)] px-4 sm:px-6 md:px-8 py-1 w-fit mb-2 sm:mb-3">
								#COMPÉTENCES
							</h2>
							<p className="text-white text-[clamp(0.55rem,0.9vw,5rem)] leading-snug sm:leading-normal">
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
