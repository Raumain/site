import { Link } from "@tanstack/react-router";
import { resolveAssetPath } from "@/utils/assets";

export default function ProjectCard({
	project,
}: {
	project: { id: number; image: string; title: string; subtitle: string };
}) {
	return (
		<article>
			<Link
				to="/projets/$id"
				params={{ id: String(project.id) }}
				className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#44FFDD] focus:ring-offset-2 focus:ring-offset-[#191919]"
				aria-label={`Voir le projet ${project.title}`}
			>
				<div className="aspect-6/5 w-full overflow-hidden bg-[#252525] mb-3 sm:mb-4">
					<img
						src={resolveAssetPath(project.image)}
						alt={`Aperçu du projet ${project.title}`}
						className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
						width="600"
						height="500"
					/>
				</div>
				<h3 className="text-white font-apotek text-base sm:text-lg md:text-xl mb-1 sm:mb-2 text-left group-hover:text-[#44FFDD] transition-colors duration-200">
					{project.title}
				</h3>
				<p className="text-gray-400 font-helvetica text-xs sm:text-sm md:text-base text-left">
					{project.subtitle}
				</p>
			</Link>
		</article>
	);
}
