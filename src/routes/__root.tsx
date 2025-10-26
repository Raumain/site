import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#44FFDD] focus:text-[#191919] focus:font-apotek-condensed focus:text-lg"
			>
				Aller au contenu principal
			</a>
			<Navbar />
			<main id="main-content" className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
