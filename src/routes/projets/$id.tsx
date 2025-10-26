import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ProjectsSelection from "@/components/projects-selection";
import data from "@/data.json";
import { resolveAssetPath } from "@/utils/assets";

export const Route = createFileRoute("/projets/$id")({
	component: RouteComponent,
	loader: ({ params }) => {
		const project = data.find((p) => p.id === Number(params.id));
		if (!project) {
			throw notFound();
		}
		return { project };
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: `${loaderData?.project.title} | Le STUDYO`,
			},
			{
				name: "description",
				content:
					loaderData?.project.details.description[0] ||
					loaderData?.project.subtitle,
			},
			{
				property: "og:title",
				content: `${loaderData?.project.title} | Le STUDYO`,
			},
			{
				property: "og:description",
				content:
					loaderData?.project.details.description[0] ||
					loaderData?.project.subtitle,
			},
		],
	}),
});

function RouteComponent() {
	const { project } = Route.useLoaderData();

	return (
		<article id="project-details">
			<div className="aspect-6/5 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden mb-3 sm:mb-4 absolute top-0 left-0">
				<img
					src={resolveAssetPath(project.image)}
					alt={project.title}
					className="w-full h-full brightness-70 object-cover object-top transition-transform duration-300 group-hover:scale-105"
					loading="eager"
					fetchPriority="high"
					width="1920"
					height="1080"
				/>
			</div>
			<div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-[45vh] sm:mt-[55vh] md:mt-[65vh]">
				<nav aria-label="Fil d'ariane" className="mb-4 sm:mb-6">
					<ol className="flex items-center gap-2 text-lg text-gray-400 font-apotek-condensed">
						<li>
							<Link to="/" className="hover:text-[#44FFDD] transition-colors">
								Accueil
							</Link>
						</li>
						<li aria-hidden="true">/</li>
						<li>
							<Link
								to="/projets"
								className="hover:text-[#44FFDD] transition-colors"
							>
								Projets
							</Link>
						</li>
						<li aria-hidden="true">/</li>
						<li aria-current="page" className="text-white truncate">
							{project.title}
						</li>
					</ol>
				</nav>
				<p
					className="text-[#44FFDD] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left"
					aria-hidden="true"
				>
					#THE_GAME
				</p>
				<h1 className="text-white font-apotek-condensed text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 sm:my-6 md:my-8 text-left uppercase">
					{project.details.title}
					<br />
					<span className="text-[#44FFDD]">{project.details.subtitle}</span>
				</h1>
				<div className="flex flex-col lg:flex-row justify-between w-full pt-4 sm:pt-6 md:pt-8 gap-8 lg:gap-12">
					<aside className="flex flex-col gap-6 sm:gap-8">
						<div className="flex flex-col gap-2">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit">
								#CLIENT
							</h2>
							<p className="text-white uppercase font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl">
								{project.details.client}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit">
								#TACTIQUE
							</h2>
							<ul className="text-white uppercase font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl">
								{project.details.tactic.map((t) => (
									<li key={t}>{t}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="bg-[#FF9BFF] font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-1 w-fit">
								#SAISON
							</h2>
							<p className="text-white uppercase font-apotek-condensed text-base sm:text-lg md:text-xl lg:text-2xl">
								{project.details.season}
							</p>
						</div>
					</aside>
					<div className="flex flex-col justify-center gap-4 sm:gap-6 text-white font-helvetica w-full lg:w-[50%] text-sm sm:text-base md:text-lg lg:text-xl">
						{project.details.description.map((d) => (
							<p key={`${d.substring(0, 20)}-${d.length}`}>{d}</p>
						))}
					</div>
				</div>
				<h2 className="text-white font-apotek-condensed text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 sm:my-6 md:my-8 text-left uppercase pt-12 sm:pt-16 md:pt-20">
					Le <span className="text-[#44FFDD]">#PROJET</span>
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 pb-12 sm:pb-16">
					<img
						src={resolveAssetPath(project.image)}
						alt={`Vue principale du projet ${project.title}`}
						className="w-full h-auto"
						loading="lazy"
						width="800"
						height="600"
					/>
					{project.details.related_posts.map((p) => (
						<img
							key={p.id}
							src={resolveAssetPath(p.image)}
							alt={`Variation du projet ${project.title}`}
							className="w-full h-auto"
							loading="lazy"
							width="800"
							height="600"
						/>
					))}
				</div>
			</div>
			<ProjectsSelection />
		</article>
	);
}
