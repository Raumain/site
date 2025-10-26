import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LoaderProps {
	className?: string;
	size?: number | string;
}

export default function Loader({ className = "", size = 200 }: LoaderProps) {
	return (
		<output
			className={`flex items-center justify-center ${className}`}
			aria-label="Chargement en cours"
		>
			<DotLottieReact
				src="/Loader.lottie"
				loop
				autoplay
				style={{
					width: typeof size === "number" ? `${size}px` : size,
					height: typeof size === "number" ? `${size}px` : size,
				}}
			/>
			<span className="sr-only">Chargement en cours...</span>
		</output>
	);
}
