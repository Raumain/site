import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import data from "@/data.json";

export const Route = createFileRoute("/projets/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Projets | Le STUDYO - Portfolio Design Sportif & Graphisme",
			},
			{
				name: "description",
				content:
					"Découvrez mon portfolio de projets en design sportif et graphisme. Affiches de matchs, identités visuelles et créations pour clubs sportifs.",
			},
			{
				property: "og:title",
				content: "Projets | Le STUDYO",
			},
			{
				property: "og:description",
				content:
					"Découvrez mon portfolio de projets en design sportif et graphisme.",
			},
		],
	}),
});

function RouteComponent() {
	return (
		<section
			id="projets"
			className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-12 sm:pt-16 md:pt-20"
			aria-labelledby="projets-heading"
		>
			<SectionHeader
				tag="#THE_SEASON"
				title="Les"
				highlightedText="#projets"
				headingId="projets-heading"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 pb-12 sm:pb-16">
				{data.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
