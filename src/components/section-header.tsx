import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
	tag: string;
	title: string;
	highlightedText: string;
	headingId: string;
}

export default function SectionHeader({
	tag,
	title,
	highlightedText,
	headingId,
}: SectionHeaderProps) {
	const tagRef = useScrollAnimation<HTMLParagraphElement>();
	const titleRef = useScrollAnimation<HTMLHeadingElement>();

	return (
		<>
			<p
				ref={tagRef}
				className="text-[#44FFDD] font-apotek-condensed text-lg sm:text-xl md:text-2xl lg:text-3xl text-left opacity-0"
				aria-hidden="true"
			>
				{tag}
			</p>
			<h2
				ref={titleRef}
				id={headingId}
				className="text-white font-apotek-condensed text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 sm:my-6 md:my-8 text-left opacity-0 animate-delay-100"
			>
				{title}{" "}
				<span className="text-[#44FFDD] uppercase">{highlightedText}</span>
			</h2>
		</>
	);
}
