import data from "@/data.json";
import ProjectCard from "./project-card";
import SectionHeader from "./section-header";

export default function ProjectsSelection() {
	return (
		<section
			className="w-full bg-[#191919] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 -mt-8"
			aria-labelledby="projects-heading"
		>
			<div className="px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
				<SectionHeader headingId="projects-heading" highlightedText="#projets" tag="" title="Sélection de"/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto">
					{data.slice(0, 4).map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
