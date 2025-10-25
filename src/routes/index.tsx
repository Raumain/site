import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import ProjectsSelection from "@/components/projects-selection";
import SectionHeader from "@/components/section-header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logoFull from "/logo_full.svg";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			{
				title:
					"Le STUDYO - Graphiste Freelance en Normandie | Design Sportif & Graphisme",
			},
			{
				name: "description",
				content:
					"Graphiste freelance basé en Normandie, spécialisé en design sportif et graphisme. Création d'affiches, identités visuelles, brochures et contenus pour clubs sportifs.",
			},
			{
				name: "keywords",
				content:
					"graphiste freelance, design sportif, normandie, identité visuelle, affiche, brochure, design graphique",
			},
			{
				property: "og:title",
				content: "Le STUDYO - Graphiste Freelance en Normandie",
			},
			{
				property: "og:description",
				content:
					"Graphiste freelance spécialisé en design sportif et graphisme basé en Normandie.",
			},
			{
				property: "og:type",
				content: "website",
			},
		],
	}),
});

interface ServiceItemProps {
	title: string;
	description: string;
}

function ServiceItem({ title, description }: ServiceItemProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full text-center">
			<h4 className="text-white font-apotek text-xl sm:text-2xl md:text-3xl lg:text-4xl">
				{title}
			</h4>
			<p className="text-gray-400 font-helvetica text-sm sm:text-base lg:text-lg mt-1">
				{description}
			</p>
		</div>
	);
}

interface ServiceCardProps {
	title: string;
	color: string;
	services: ServiceItemProps[];
}

function ServiceCard({ title, color, services }: ServiceCardProps) {
	return (
		<article
			className="flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 border p-4 sm:p-6 md:p-8 w-full max-w-md min-h-0"
			style={{ borderColor: color }}
		>
			<h3
				className="uppercase text-center w-full py-1 sm:py-2 text-[#191919] font-apotek-condensed text-2xl sm:text-3xl md:text-4xl"
				style={{ backgroundColor: color }}
			>
				{title}
			</h3>
			<div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
				{services.map((service) => (
					<ServiceItem
						key={crypto.randomUUID()}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</article>
	);
}

function GamePlanSection() {
	const graphismeServices = [
		{
			title: "Affiche",
			description:
				"Création d'un visuel autour d'un évènement, d'un produit...",
		},
		{
			title: "Carte de Visite",
			description: "Création de vos cartes de visites en recto-verso.",
		},
		{
			title: "Magazine / Brochure",
			description: "Création d'une brochure ou d'un magazine.",
		},
		{
			title: "Identité Visuelle",
			description:
				"Création de l'identité visuelle complète de votre évènement ou de votre boîte.",
		},
	];

	const designSportifServices = [
		{
			title: "Affiche | Standard",
			description: "Création d'un visuel autour d'un évènement, d'un match...",
		},
		{
			title: "Affiche | Starification",
			description:
				"Création d'un visuel mettant en valeur un joueur en particulier.",
		},
		{
			title: "Charte Digital",
			description: "Création d'une charte digitale pour les réseaux sociaux.",
		},
		{
			title: "Identité Visuelle",
			description:
				"Création de l'identité visuelle complète de votre évènement ou de votre club.",
		},
	];

	return (
		<section
			id="game-plan"
			className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
			aria-labelledby="services-heading"
		>
			<SectionHeader
				tag="#GAME_PLAN"
				title="Les différents"
				highlightedText="#services"
				headingId="services-heading"
			/>
			<div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-48 mt-8 sm:mt-12 md:mt-16">
				<ServiceCard
					title="#Graphisme"
					color="#FF9BFF"
					services={graphismeServices}
				/>
				<ServiceCard
					title="#Design_sportif"
					color="#FF9BFF"
					services={designSportifServices}
				/>
			</div>
			<button
				type="button"
				onClick={() => {
					const section = document.getElementById("game-plan");
					if (section) {
						section.scrollIntoView({ behavior: "smooth" });
					}
				}}
				className="font-apotek-condensed bg-[#44FFDD] border border-[#44FFDD] w-fit self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-8 sm:px-16 md:px-24 lg:px-32 py-2 mt-8 sm:mt-10 md:mt-12 hover:bg-[#191919] hover:text-[#44FFDD] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
				aria-label="Retourner en haut de la section services"
			>
				Voir tous les services
			</button>
		</section>
	);
}

function App() {
	const [result, setResult] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const highlightsRef = useScrollAnimation<HTMLParagraphElement>();

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setResult("Envoie en cours....");
		const formData = new FormData(event.target as HTMLFormElement);
		formData.append("access_key", "0ec8d32a-3095-4799-8023-f39d0ff93a42");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();
			if (data.success) {
				setResult("Votre message a bien été envoyé");
				(event.target as HTMLFormElement).reset();
			} else {
				setResult("Erreur d'envoie, veuillez réessayer plus tard");
			}
		} catch {
			setResult("Erreur d'envoie, veuillez réessayer plus tard");
		} finally {
			setIsSubmitting(false);
			setTimeout(() => {
				setResult("");
			}, 3000);
		}
	};

	return (
		<div className="min-h-screen overflow-y-auto text-center bg-[#191919] flex flex-col gap-8 sm:gap-10 md:gap-12">
			<section
				id="hero"
				className="h-[calc(100vh-10vh)] flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20"
				aria-labelledby="hero-heading"
			>
				<div className="flex-1 w-full max-w-7xl flex items-center justify-center">
					<h1 className="sr-only" id="hero-heading">
						Le STUDYO - Graphiste freelance basé en Normandie
					</h1>
					<img
						src={logoFull}
						alt="Le STUDYO - Logo complet"
						className="w-full max-w-full sm:max-w-[80%] lg:max-w-[80%] xl:max-w-[60%] h-auto -mt-16 sm:-mt-24 md:-mt-32"
						width="800"
						height="400"
						loading="eager"
						fetchPriority="high"
					/>
				</div>
				<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full max-w-7xl gap-4 sm:gap-6 md:gap-8 lg:gap-12 uppercase font-apotek-condensed text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
					<p className="text-center sm:text-left">
						Basé en France{" "}
						<span className="text-[#44FFDD] whitespace-nowrap">#NORMANDIE</span>
					</p>
					<p className="text-center sm:text-right">
						Graphiste freelance{" "}
						<span className="text-[#44FFDD] whitespace-nowrap">#LE_STUDYO</span>
					</p>
				</div>
			</section>
			<section
				id="projects-selection"
				className="w-full"
				aria-labelledby="highlights-heading"
			>
				<p
					ref={highlightsRef}
					className="text-[#44FFDD] font-apotek-condensed text-lg sm:text-xl md:text-2xl lg:text-3xl text-left pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 opacity-0"
					aria-hidden="true"
				>
					#HIGHLIGHTS
				</p>
				<h2 className="sr-only" id="highlights-heading">
					Projets en vedette
				</h2>
				<ProjectsSelection />
			</section>
			<GamePlanSection />
			<section
				id="kick-off"
				className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
				aria-labelledby="contact-heading"
			>
				<SectionHeader
					tag="#KICK_OFF"
					title="Prêt à donner vie à vos"
					highlightedText="#idées_?"
					headingId="contact-heading"
				/>
				<div className="w-full flex items-center justify-center mt-8">
					<article className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 border border-[#FF9BFF] mx-auto w-full max-w-2xl p-4 sm:p-6 md:p-8 min-h-0">
						<h3 className="uppercase text-center w-full py-1 sm:py-2 text-[#191919] font-apotek-condensed text-2xl sm:text-3xl md:text-4xl bg-[#FF9BFF]">
							#Contact
						</h3>
						<div className="w-full">
							<form
								onSubmit={onSubmit}
								className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full"
								noValidate
							>
								<div className="w-full">
									<label htmlFor="name" className="sr-only">
										Nom et prénom
									</label>
									<input
										type="text"
										name="name"
										id="name"
										required
										placeholder="Nom et prénom"
										className="bg-[#464646] border-none px-4 sm:px-6 py-3 sm:py-4 w-full placeholder:text-[#FFFFFF80] font-apotek text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#44FFDD]"
										aria-required="true"
										disabled={isSubmitting}
									/>
								</div>
								<div className="w-full">
									<label htmlFor="email" className="sr-only">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										placeholder="Email"
										className="bg-[#464646] border-none px-4 sm:px-6 py-3 sm:py-4 w-full placeholder:text-[#FFFFFF80] font-apotek text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#44FFDD]"
										aria-required="true"
										disabled={isSubmitting}
									/>
								</div>
								<div className="w-full">
									<label htmlFor="description" className="sr-only">
										Description du projet et budget
									</label>
									<textarea
										name="description"
										id="description"
										required
										placeholder="Projet & Budget"
										className="bg-[#464646] border-none px-4 sm:px-6 py-3 sm:py-4 w-full placeholder:text-[#FFFFFF80] font-apotek text-white min-h-32 sm:min-h-40 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#44FFDD] resize-y"
										aria-required="true"
										disabled={isSubmitting}
									/>
								</div>
								<input
									type="hidden"
									name="from_name"
									value="Le STUDYO - Contact"
								/>
								<input
									type="checkbox"
									name="botcheck"
									id="botcheck"
									className="hidden"
									tabIndex={-1}
									aria-hidden="true"
								/>
								{result && (
									<output
										aria-live="polite"
										className="text-white font-apotek text-sm sm:text-base"
									>
										{result}
									</output>
								)}
								<button
									type="submit"
									className="font-apotek-condensed bg-[#44FFDD] border border-[#44FFDD] w-full self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-8 sm:px-16 md:px-24 lg:px-32 py-2 mt-4 sm:mt-8 md:mt-12 hover:bg-[#191919] hover:text-[#44FFDD] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
									disabled={isSubmitting}
									aria-label="Envoyer le formulaire de contact"
								>
									{isSubmitting ? "Envoi..." : "Envoyer"}
								</button>
							</form>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
}
